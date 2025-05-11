const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", FacilitySchema);