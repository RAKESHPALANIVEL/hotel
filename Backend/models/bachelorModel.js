const mongoose = require('mongoose');

// Define the Bachelor Mess Schema
const bachelorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

// Create the Bachelor model
const Bachelor = mongoose.model('Bachelor', bachelorSchema);

module.exports = Bachelor;
