const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },
    fromDate: {
      type: Date,
      required: [true, "From Date is required"],
    },
    toDate: {
      type: Date,
      required: [true, "To Date is required"],
      validate: {
        validator: function (value) {
          return value >= this.fromDate;
        },
        message: "To Date must be after From Date",
      },
    },
    bookingType: {
      type: String,
      required: [true, "Booking Type is required"],
      enum: ["Dedicated Desk", "Private Cabin", "Virtual Office", "Conference Room", "Meeting Room"],
    },
    additionalRequirements: {
      type: String,
      default: "",
    },
    hours: {
      type: Number,
      min: [1, "Minimum booking time is 1 hour"],
      max: [120, "Maximum booking time is 120 hours"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
