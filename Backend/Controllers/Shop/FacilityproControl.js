const Product = require("../../Models/FacilityModel");

const getFacilityDetails = async (req, res) => {
    try {
      const { id } = req.params;
      const facility = await Facility.findById(id);
  
      if (!facility)
        return res.status(404).json({
          success: false,
          message: "Facility not found!",
        });
  
      res.status(200).json({
        success: true,
        data: facility,
      });
    } catch (e) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  };

module.exports = { getFacilityDetails };