import React, { useEffect } from 'react';
import  { Fragment } from 'react';
import { Button } from "@/Components/ui/button";
import { Sheet,SheetContent,SheetHeader, SheetTitle } from '@/Components/ui/sheet';
import { useState } from 'react';
import { addProductFormElements } from "@/Config/ConfigIndex";
import CommonForm from "../../Components/Common/Form";
import ImageUpload from '@/Components/AdminView/ImageUpload';
import { addNewProduct, editProduct, fetchAllProducts,deleteProduct } from '@/Store/Admin/ProductSlice/Index';
import { useDispatch, useSelector } from "react-redux";
import { toast } from '@/hooks/use-toast';
import AdminProductTile from "../../Components/AdminView/ProductTile";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  location: "",
};

const Products = () => {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] =useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const[currentEditedId,setCurrentEditedId]=useState(null)
  const dispatch=useDispatch();
  const adminProducts = useSelector((state) => state.adminProducts);
  const productList = adminProducts.productList;
  

  function onSubmit(event) {
    event.preventDefault();

    currentEditedId !==null ?
    dispatch(editProduct({
      id:currentEditedId ,formData
    })).then ((data)=>{
      //console.log(data,"edit");

      if(data?.payload?.success)
      {
        dispatch(fetchAllProducts());
        setFormData(initialFormData);
        setOpenCreateProductsDialog(false)
        setCurrentEditedId(null)
      }
    })
    :dispatch(addNewProduct({
      ...formData,
      image:uploadedImageUrl,
    })).then((data)=>{
      //console.log(data);
      if(data ?.payload?.success)
      {
        dispatch(fetchAllProducts())
        setOpenCreateProductsDialog(false)
        setImageFile(null);
        setFormData(initialFormData);
        toast({
          title:"Product added successfully"
        })
      }
    })
  };

  function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }


  // function isFormValid() {
  //   return Object.keys(formData)
  //     .map((key) => formData[key] !== "")
  //     .every((item) => item);
  // }


  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[dispatch]);


  //console.log(productList,uploadedImageUrl,"productList");
  //console.log(formData,"formData");

  return (
    <Fragment>

      <div className="mb-5 w-full flex justify-end">
      <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          productList && productList.length > 0 ? 
          productList.map(productItem => <AdminProductTile
            setFormData={setFormData}
            setOpenCreateProductsDialog={setOpenCreateProductsDialog}
            setCurrentEditedId={setCurrentEditedId}
            product={productItem}
            handleDelete={handleDelete}
            />):null
        }
      </div>
      <Sheet open={openCreateProductsDialog}
         onOpenChange={() => {setOpenCreateProductsDialog(false);
          setCurrentEditedId(null);
          setFormData(initialFormData);
         }}>

        <SheetContent side="right" className="overflow-auto">
         <SheetHeader>
              <SheetTitle>
                {
                  currentEditedId!==null ? 
                  'Edit Product' : 'Add New Product'
                }
              </SheetTitle>
          </SheetHeader> 
          <ImageUpload     
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
              formControls={addProductFormElements}
              //isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default Products;
