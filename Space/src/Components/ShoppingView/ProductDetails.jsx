import React from 'react'
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar,AvatarFallback } from '../ui/avatar';
import { StarIcon } from "lucide-react";
import { setProductDetails } from "@/Store/Shop/ShopproSlice";
import { useDispatch } from "react-redux";
const ProductDetails = ({open,setOpen,productDetails}) => {

    const dispatch = useDispatch();
    function handleDialogClose() {
        setOpen(false)
        dispatch(setProductDetails());
      }

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
         <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
         <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
            <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-2xl mb-5 mt-4">
            {productDetails?.description}</p>
          </div>
          <div className='mt-5 mb-5'>
            <Button className="w-full"> Add to Cart</Button>
          </div>
          <Separator/>
          <div className="max-h-[300px] overflow-auto">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className='grid gap-6'>
            <div className='flex gap-4'>
                <Avatar className='w-10 h-10 border'><AvatarFallback>RS</AvatarFallback></Avatar>
                <div className='grid gap-1'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold'>Raj Singh</h3>
                    </div>
                    <div className='flex item-center gap-0.5'>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                    </div>
                    <p className='text-muted-foreground'>This is a Nice Product</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <Avatar className='w-10 h-10 border'><AvatarFallback>RS</AvatarFallback></Avatar>
                <div className='grid gap-1'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold'>Raj Singh</h3>
                    </div>
                    <div className='flex item-center gap-0.5'>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                    </div>
                    <p className='text-muted-foreground'>This is a Nice Product</p>
                </div>
            </div>
            <div className='flex gap-4'>
                <Avatar className='w-10 h-10 border'><AvatarFallback>RS</AvatarFallback></Avatar>
                <div className='grid gap-1'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-bold'>Raj Singh</h3>
                    </div>
                    <div className='flex item-center gap-0.5'>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                        <StarIcon className='w-5 h-5 fill-primary'/>
                    </div>
                    <p className='text-muted-foreground'>This is a Nice Product</p>
                </div>
            </div>

          </div>
          <div className='m-6 flex gap-2'>
          </div>
          </div>

        </div>
         </DialogContent>
    </Dialog>
  )
}

export default ProductDetails
