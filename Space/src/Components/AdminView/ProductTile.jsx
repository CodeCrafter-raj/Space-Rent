import React from "react";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "../ui/button"; // Ensure Button is imported

const ProductTile = ({product, setFormData,setOpenCreateProductsDialog, setCurrentEditedId,handleDelete}) => {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image} // Add placeholder image
            alt={product?.title} // Add alt fallback
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>

        <CardContent>
        <h2 className="text-xl font-bold mb-2 mt-2 underline">
            {product?.title || "Untitled Product"}
          </h2>
          <h4 className="text-xl font-bold mb-2 mt-2">
            {product?.description || "Untitled Product"}
          </h4>
          <div className="flex justify-between items-center mb-2"> 
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <Button onClick={()=>{
                setOpenCreateProductsDialog(true);
                setCurrentEditedId(product?._id);
                setFormData(product);
          }}>Edit</Button>


          <Button onClick={()=>
            handleDelete(product?._id)}>
              Delete
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductTile;
