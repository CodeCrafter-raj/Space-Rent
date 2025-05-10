import { fetchAllUserOffers } from '@/Store/Shop/FaceProSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FacilityTile from '@/Components/ShoppingView/FacilityTile';

const Facility = () => {
  const dispatch = useDispatch();
  const { offerList } = useSelector((state) => state.ShopFacility);

  useEffect(() => {
    dispatch(fetchAllUserOffers());
  }, [dispatch]);

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="bg-background w-full rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-extrabold mb-2">All Facilities</h2>
        <div className="text-muted-foreground text-sm">
          {offerList && offerList.length} Facilities
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {offerList && offerList.length > 0 ? (
                    offerList.map((facilityItem) => (
                  <FacilityTile key={facilityItem.id} facility={facilityItem} />
                  ))
                ) : (
            <div className="col-span-full text-center text-gray-500">
              No facilities available.
          </div>
          )}
        </div>
</div>
  );
};

export default Facility;
