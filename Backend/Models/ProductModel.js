const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    location:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);