const { imageUploadUtil } = require("../../Cloud/Cloudinary");
const Facility = require("../../Models/FacilityModel");

const handleOfferImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

//ADD A NEW OFFER
const addFacility = async (req, res) => {
    try {
      const {
        image,
        title,
        description,
      } = req.body;
  
const newlyCreatedFacility = new Facility({
        image,
        title,
        description,
      });

  await newlyCreatedFacility.save();
      res.status(201).json({
        success: true,
        data: newlyCreatedFacility,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };

//FETCH ALL PRODUCT
const fetchAllFacility = async (req, res) => {
    try {
      const listOfFacility = await Facility.find({});
      //console.log(listOfOffers);
      res.status(200).json({
        success: true,
        data: listOfFacility,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };

//Edit A Product
  const editFacility = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        image,
        title,
        description,
      } = req.body;
  
      let findFacility = await Facility.findById(id);
      if (!findFacility)
        return res.status(404).json({
          success: false,
          message: "Offer not found",
        });
  
      findFacility.title = title || findFacility.title;
      findFacility.description = description || findFacility.description;
      findFacility.image = image || findFacility.image;

  
      await findFacility.save();
      res.status(200).json({
        success: true,
        data: findFacility,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };

//DELETE FACILITY 
const deleteFacility = async (req, res) => {
    try {
      const { id } = req.params;
      const offer = await Facility.findByIdAndDelete(id);
  
      if (!offer)
        return res.status(404).json({
          success: false,
          message: "Facility not found",
        });
  
      res.status(200).json({
        success: true,
        message: "Facility delete successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };

module.exports={
  handleOfferImageUpload,
  addFacility,
  fetchAllFacility,
  editFacility,
  deleteFacility,
};