const express = require("express");

const {
    getFacilityDetails
 
} = require("../../Controllers/Shop/FacilityproControl");


const router = express.Router();


router.get("/get/:id", getFacilityDetails);
module.exports = router;