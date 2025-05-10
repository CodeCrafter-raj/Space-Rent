import React from 'react'
//import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter } from "../ui/card";
//import { Button } from "../ui/button";



const ShopTile = ({product,handleGetProductDetails }) => {
  return (
    <div className="bg-white border shadow-md rounded-lg overflow-hidden flex flex-col h-[400px]">
      {/* Image Section */}
      <div
        onClick={() => handleGetProductDetails(product?._id)}
        className="h-[50%] w-full overflow-hidden"
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="h-[50%] flex flex-col p-4 overflow-hidden">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2 truncate underline">{product?.title}</h2>

        {/* Description */}
        <div className="overflow-auto flex-grow">
          <p className="text-sm text-gray-600 leading-relaxed">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductCardGrid = ({ products, handleGetProductDetails }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 ">
      {products.map((product) => (
        <div key={product._id} className="w-full sm:w-[48%] lg:w-[30%]">
          <ProductCard
            product={product}
            handleGetProductDetails={handleGetProductDetails}
          />
        </div>
      ))}
    </div>
  )
}

export default ShopTile;
