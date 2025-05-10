import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    offerList: [],
  };


export const addNewOffer = createAsyncThunk(
    "/offers/addNewOffer",
    async (formData) => {
      const result = await axios.post(
        "http://localhost:5500/api/admin/facility/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return result?.data;
    }
  );

  export const fetchAllOffers = createAsyncThunk(
    "/offers/fetchAllOffers",
    async () => {
      const result = await axios.get(
        "http://localhost:5500/api/admin/facility/get"
      );
      //console.log("API Response:", result.data);
      return result?.data;
    }
  );

  export const editOffer = createAsyncThunk(
    "/offers/editOffer",
    async ({ id, formData }) => {
      const result = await axios.put(
        `http://localhost:5500/api/admin/facility/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return result?.data;
    }
  );

  export const deleteOffer = createAsyncThunk(
    "/offers/deleteOffer",
    async (id) => {
      const result = await axios.delete(
        `http://localhost:5500/api/admin/facility/delete/${id}`
      );
  
      return result?.data;
    }
  );

const AdminOfferSlice = createSlice({
    name: "adminOffer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllOffers.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchAllOffers.fulfilled, (state, action) => {
          //console.log(action.payload);
          state.isLoading = false;
          state.offerList = action.payload.data;
        })
        .addCase(fetchAllOffers.rejected, (state, action) => {
          state.isLoading = false;
          state.offerList = [];
        });
    },
  });

export default AdminOfferSlice.reducer;