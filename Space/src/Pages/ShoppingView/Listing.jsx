import Filter from '@/Components/ShoppingView/Filter';
import React from 'react'
import ProductDetails from "@/Components/Shoppingview/ProductDetails";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { useEffect, useState, } from "react";
import { sortOptions } from "@/Config/ConfigIndex";
import { useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts,fetchProductDetails } from '@/Store/Shop/ShopproSlice';
import ShopTile from '@/Components/ShoppingView/ShopTile';

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  console.log(queryParams, "queryParams");

  return queryParams.join("&");
}

const Listing = () => {

  const dispatch=useDispatch();

  const { productList, productDetails} = useSelector(
    (state) => state.shopProducts
  );
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const[openDetailsDialog, setOpenDetailsDialog]=useState(false);

  const categorySearchParam = searchParams.get("category");

  function handleFilter(getSectionId, getCurrentOption) {
      //console.log(getSectionId,getCurrentOption)
      let cpyFilters = { ...filters };
      const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

      if (indexOfCurrentSection === -1) {
        cpyFilters = {
          ...cpyFilters,
          [getSectionId]: [getCurrentOption],
        };
      }else {
        const indexOfCurrentOption =
          cpyFilters[getSectionId].indexOf(getCurrentOption);
  
        if (indexOfCurrentOption === -1)
          cpyFilters[getSectionId].push(getCurrentOption);
        else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
          setFilters(cpyFilters);
          sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
          console.log(cpyFilters);
  }

  // function handleGetProductDetails(getCurrentProductId) {
  //   console.log(getCurrentProductId);
  //   dispatch(fetchProductDetails(getCurrentProductId));
  // }

  useEffect(()=>{
    setSort('price-lowtohigh');
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  },[]);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);

  function handleSort(value) {
    setSort(value);
  }



//fetch list of products
useEffect(()=>{
  if(filters!==null && sort !==null)
  dispatch(fetchAllFilteredProducts({filterParams:filters, sortParams:sort}));

},[dispatch, sort, filters]);

useEffect(() => {
  if (productDetails !== null) setOpenDetailsDialog(true);
}, [productDetails]);
 
  //console.log(productDetails,"productDetails");
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      <Filter filters={filters} handleFilter={handleFilter}/>
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div>
        </div>
          <div className="p-4 border-b flex items-center justify-between">
               <h2 className="text-lg font-extrabold ">All Products</h2>
               <div className="flex items-center gap-3">
               <span className="text-muted-foreground">
                    {productList.length} Products
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1" >
                          <ArrowUpDownIcon className="h-4 w-4" />
                          <span>Sort by</span>
                        </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                           {sortOptions.map(sortItem => 
                           <DropdownMenuRadioItem value={sortItem.id} key={sortItem.id}>
                              {sortItem.label}
                            </DropdownMenuRadioItem> )}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>

                </DropdownMenu>
               </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {productList && productList.length > 0
               ? productList.map((productItem) => (
               <ShopTile
                 key={productItem.id}
                  //handleGetProductDetails={handleGetProductDetails}
                product={productItem}
              />
              ))
              : null}
            </div>

      </div>
      <ProductDetails
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  )
}

export default Listing;
