const express = require("express");

const {
  handleOfferImageUpload,
  addFacility,
  editFacility,
  fetchAllFacility,
  deleteFacility,
} = require("../../Controllers/Admin/OfferControl");

const { upload } = require("../../Cloud/Cloudinary");

const router = express.Router();



router.post("/upload-image", upload.single("my_file"), handleOfferImageUpload);
router.post("/add", addFacility);
router.put("/edit/:id", editFacility);
router.delete("/delete/:id", deleteFacility);
router.get("/get", fetchAllFacility);
module.exports = router;