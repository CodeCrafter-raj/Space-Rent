import React from 'react'
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "../ui/button"; // Ensure Button is imported

const FacilityTile = ({facility,setFormData,setOpenCreatefacilityDialog,setCurrentEditedId,handleDelete}) => {
  return (
        <Card className="w-full max-w-sm mx-auto">
        <div>
         <div className="relative">
          <img
            src={facility?.image} // Add placeholder image
            alt={facility?.title} // Add alt fallback
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
         </div>
           <CardContent>
                   <h2 className="text-xl font-bold mb-2 mt-2">
                     {facility?.title || "Untitled facility"}
                   </h2>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button
                onClick={()=>{
                  setOpenCreatefacilityDialog(true);
                  setCurrentEditedId(facility?._id);
                  setFormData(facility);
            }}>EDIT</Button>
                <Button onClick={()=>
            handleDelete(facility?._id)}>DELETE</Button>
            </CardFooter>
        </div>
        </Card>
        
  )
};

export default FacilityTile;
