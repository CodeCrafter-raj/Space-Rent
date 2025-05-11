const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String, // Correctly defined as a string
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String, // Wrap 'String' type in quotes or use the proper data type
        required: [true, 'Email is required'],
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    Phone_Number: {
        type: String,
        required: [true, 'Mobile number is required'],
        match: [/^\d{10}$/, 'Mobile number must be 10 digits'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
