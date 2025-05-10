import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth_Slice";
import adminProductsSlice from "./Admin/ProductSlice/Index";
import adminOfferSlice from "./Admin/OfferSlice/IndexOffer";
import ShopProductSlice from './Shop/ShopproSlice';
import ShopFacilitySlice from './Shop/FaceProSlice';

const Store=configureStore({
    reducer:{
        auth:authReducer,
        adminProducts : adminProductsSlice,
        adminOffer:adminOfferSlice,
        shopProducts:ShopProductSlice,
        ShopFacility:ShopFacilitySlice
    },
});

export default Store;