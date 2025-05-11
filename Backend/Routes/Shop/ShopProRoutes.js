const express = require("express");

const {
    getFilteredProducts,
    getProductDetails
 
} = require("../../Controllers/Shop/ShopproControl");


const router = express.Router();


router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);
module.exports = router;