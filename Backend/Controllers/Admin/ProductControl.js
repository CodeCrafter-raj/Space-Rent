const { imageUploadUtil } = require("../../Cloud/Cloudinary");
const Product = require("../../Models/ProductModel");

const handleImageUpload = async (req, res) => {
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

//ADD A NEW PRODUCT
const addProduct = async (req, res) => {
    try {
      const {
        image,
        title,
        description,
        category,
        location,
      } = req.body;
  
      const newlyCreatedProduct = new Product({
        image,
        title,
        description,
        category,
        location
      });
  
      await newlyCreatedProduct.save();
      res.status(201).json({
        success: true,
        data: newlyCreatedProduct,
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
const fetchAllProducts = async (req, res) => {
    try {
      const listOfProducts = await Product.find({});
      //console.log(listOfProducts);
      res.status(200).json({
        success: true,
        data: listOfProducts,
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
  const editProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        image,
        title,
        description,
        category,
        location
        //averageReview,
      } = req.body;
  
      let findProduct = await Product.findById(id);
      if (!findProduct)
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
  
      findProduct.title = title || findProduct.title;
      findProduct.description = description || findProduct.description;
      findProduct.category = category || findProduct.category;
      findProduct.location = brand || findProduct.location;
      findProduct.image = image || findProduct.image;
      //findProduct.averageReview = averageReview || findProduct.averageReview;
  
      await findProduct.save();
      res.status(200).json({
        success: true,
        data: findProduct,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };


//delete a product
const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if (!product)
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
  
      res.status(200).json({
        success: true,
        message: "Product delete successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occured",
      });
    }
  };


module.exports = {
    handleImageUpload,
    addProduct,
    fetchAllProducts,
    editProduct,
    deleteProduct,
  };