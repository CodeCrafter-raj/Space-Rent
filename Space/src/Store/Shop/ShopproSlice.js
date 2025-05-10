import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const initialState={
    isLoading:false,
    productList:[],
    productDetails: null,
}

export const fetchAllFilteredProducts = createAsyncThunk(
    "/products/fetchAllProducts",
    async ({filterParams, sortParams}) => {
        const query=new URLSearchParams({
            ...filterParams,
            sortBy:sortParams,
        });
      const result = await axios.get(
        `http://localhost:5500/api/shop/products/get?${query}`
      );
      console.log(filterParams);
      return result?.data;
    }
  );

  export const fetchProductDetails = createAsyncThunk(
    "/products/fetchAProductDetails",
    async (id) => {
      const result = await axios.get(
        `http://localhost:5500/api/shop/products/get/${id}`
      );
      //console.log("API Response:", result.data);
      return result?.data;
    }
  );


const ShopProSlice=createSlice({
    name:'shoppingProducts',
    initialState,
    reducers:{
      setProductDetails:(state)=>{
        state.productDetails=null;
      },
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchAllFilteredProducts.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchAllFilteredProducts.fulfilled,(state,action)=>{
            //console.log(action.payload);
            state.isLoading=false;
            state.productList=action.payload.data;
        })
        .addCase(fetchAllFilteredProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.productList=[]
        })
        .addCase(fetchProductDetails.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchProductDetails.fulfilled,(state,action)=>{
            //console.log(action.payload);
            state.isLoading=false;
            state.productDetails=action.payload.data;
        })
        .addCase(fetchProductDetails.rejected,(state,action)=>{
            state.isLoading=false;
            state.productDetails=null;
        });

    }

})
export const {setProductDetails} = ShopProSlice.actions;
export default ShopProSlice.reducer;