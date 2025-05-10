import React from 'react'
import { toast } from '@/hooks/use-toast';
import  { Fragment } from 'react'
import { Button } from "@/Components/ui/button";
import { Sheet,SheetContent,SheetHeader, SheetTitle } from '@/Components/ui/sheet';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CommonForm from "../../Components/Common/Form";
import { addOfferFormElements } from "@/Config/ConfigIndex";
import OfferImageUpload from '@/Components/AdminView/OfferImageUpload';
import { addNewOffer, fetchAllOffers,editOffer,deleteOffer } from '@/Store/Admin/OfferSlice/IndexOffer';
//const[currentEditedId,setCurrentEditedId]=useState(null)
import AdminFacilityTile from "../../Components/AdminView/FacilityTile";

const initialFormData = {
  image: null,
  title: "",
  description: "",
};





const Offerings = () => {

const [openCreatefacilityDialog, setOpenCreatefacilityDialog] =useState(false);
const [formData, setFormData] = useState(initialFormData);
const [imageFile, setImageFile] = useState(null);
const [uploadedImageUrl, setUploadedImageUrl] = useState("");
const [imageLoadingState, setImageLoadingState] = useState(false);
const[currentEditedId,setCurrentEditedId]=useState(null)
const dispatch=useDispatch();
const adminOffer = useSelector((state) => state.adminOffer);
const offerList = adminOffer.offerList;
//console.log(formData);


function onSubmit(event) {
  event.preventDefault();
  
      currentEditedId !==null ?
      dispatch(editOffer({
        id:currentEditedId ,formData
      })).then ((data)=>{
        //console.log(data,"edit");
  
        if(data?.payload?.success)
        {
          dispatch(fetchAllOffers());
          setFormData(initialFormData);
          setOpenCreatefacilityDialog(false)
          setCurrentEditedId(null)
        }
      }):
  dispatch(addNewOffer({
    ...formData,
    image:uploadedImageUrl
  })).then((data)=>{
    console.log(data);
    if(data ?.payload?.success)
      {
        dispatch(fetchAllOffers())
        setOpenCreatefacilityDialog(false)
        setImageFile(null);
        setFormData(initialFormData);
        toast({
          title:"Facility added successfully"
        })
      }
  });

};

 function handleDelete(getCurrentfacilityId) {
   //console.log(getCurrentfacilityId);
    dispatch(deleteOffer(getCurrentfacilityId)).then((data) => {
         if (data?.payload?.success) {
           dispatch(fetchAllOffers());
         }
       });
  }


useEffect(()=>{
    dispatch(fetchAllOffers());
  },[dispatch]);



//console.log(facilityList);
  return (
    <div>
       <Fragment>
         <div className="mb-5 w-full flex justify-end">
              <Button onClick={() => setOpenCreatefacilityDialog(true)} >
                  Add New Offerings
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {
              offerList && offerList.length > 0 ? 
              offerList.map(facilityItem => <AdminFacilityTile
              setFormData={setFormData}
              setOpenCreatefacilityDialog={setOpenCreatefacilityDialog}
              setCurrentEditedId={setCurrentEditedId}
              facility={facilityItem}
             handleDelete={handleDelete}
             />):null
            }
            </div>
          <Sheet open={openCreatefacilityDialog}
            onOpenChange={() => {setOpenCreatefacilityDialog(false)}}>
                <SheetContent side="right" className="overflow-auto">
                     <SheetHeader>
                        <SheetTitle>
                        {
                          currentEditedId!==null ? 
                          'Edit Product' : 'Add New Facility'
                        }
                        </SheetTitle>
                      </SheetHeader> 
              <OfferImageUpload
               imageFile={imageFile}
               setImageFile={setImageFile}
               uploadedImageUrl={uploadedImageUrl}
               setUploadedImageUrl={setUploadedImageUrl}
               imageLoadingState={imageLoadingState}
               setImageLoadingState={ setImageLoadingState}
               isEditMode={currentEditedId!==null}
              />
              <div className="py-6">
              <CommonForm
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormData}
                buttonText={currentEditedId!==null ? "Edit" : "Add"}
                formControls={addOfferFormElements}
              />
              </div>
                </SheetContent>
          </Sheet>
       </Fragment>
    </div>
  )
}

export default Offerings;

