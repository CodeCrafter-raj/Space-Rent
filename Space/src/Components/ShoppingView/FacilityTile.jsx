import React from 'react';
import { Card, CardContent,  } from "../ui/card";
import { Separator } from "@/Components/ui/separator"


const FacilityTile = ({ facility }) => {
  return (
    <Card className="flex flex-col w-[90%] max-w-[90%] mx-auto h-[360px]">
      {/* Image Container */}
      <div className="h-[60%] w-full overflow-hidden">
        <img
          src={facility?.image}
          alt={facility?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <Separator/>
      {/* Small gap after image */}
      <div className="h-2"></div>

      {/* Content */}
      <CardContent className="px-4 flex flex-col justify-start grow">
        {/* Title with a gap below */}
        <h2 className="text-lg font-bold mb-2 truncate underline">{facility?.title}</h2>

        {/* Small gap after title */}
        <div className="h-2"></div>

        {/* Description */}
        <p className="text-sm text-gray-600 overflow-hidden text-ellipsis">
          {facility?.description}
        </p>
      </CardContent>
    </Card>
  );
};


export default FacilityTile;
