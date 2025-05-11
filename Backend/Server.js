const express=require('express');
const app=express()
const db=require("./db")
const PORT=process.env.PORT||5500;
const cors=require('cors');
const cookieParser = require('cookie-parser');
const AuthRoutes=require('./Routes/Auth/AuthRoutes');
const Contact = require('../Backend/Models/ContactModel')
const Booking = require("../Backend//Models/BookingModel");
const AdminProductRoute=require("./Routes/Admin/ProductRoute");
const AdminOfferRoute=require("./Routes/Admin/OfferRoutes");
const ShopProRouter=require('./Routes/Shop/ShopProRoutes');
const FaceProRoute=require('./Routes/Shop/FacilityProRoutes');
const dataFetchRoutes = require("./Routes/DataFetch/dataFetchRoutes");
const contactRoutes = require("./Routes/DataFetch/contactFetchRoute");
app.use(cors
    ({
        origin:" http://localhost:5173",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:["Content-Type",
        'Authorization',
        'Cache-Control',
        'Expire',
        'Pragma'
    ],
    credentials:true
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/Auth/',AuthRoutes);
app.use('/api/admin/products',AdminProductRoute);
app.use('/api/admin/facility',AdminOfferRoute);
app.use('/api/shop/products',ShopProRouter);
app.use('./api/shop/facility',FaceProRoute);
app.use("/api", dataFetchRoutes);
app.use("/api", contactRoutes);
app.use("/public", express.static("public")); // Serve static files

// Contact Form Route
app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, Phone_Number, message } = req.body;
  
      // Create a new contact entry
      const newContact = new Contact({ name, email, Phone_Number, message });
      await newContact.save();
  
      res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  });

  

// Create a new booking
app.post("/api/booking", async (req, res) => {
    try {
      const bookingData = req.body;
      const newBooking = new Booking(bookingData);
      await newBooking.save();
      res.status(200).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(400).json({ error: error.message });
    }
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});