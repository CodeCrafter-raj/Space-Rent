import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const initialState={
    isLoading:false,
    offerList:[],
    facilityDetails: null,
}


export const fetchAllUserOffers = createAsyncThunk(
    "/offers/fetchAllUserOffers",
    async () => {
      const result = await axios.get(
        "http://localhost:5500/api/admin/facility/get"
      );
      //console.log("API Response:", result.data);
      return result?.data;
    }
  );

const ShopFaceSlice=createSlice({
    name:'shoppingFacility',
    initialState,
    reducers:{
      setFacilityDetails:(state)=>{
        state.facilityDetails=null;
      },
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchAllUserOffers.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchAllUserOffers.fulfilled,(state,action)=>{
            //console.log(action.payload);
            state.isLoading=false;
            state.offerList=action.payload.data;
        })
        .addCase(fetchAllUserOffers.rejected,(state,action)=>{
            state.isLoading=false;
            state.facilityDetails=null;
        });

    }

})
export const {setFacilityDetails} = ShopFaceSlice.actions;
export default ShopFaceSlice.reducer;