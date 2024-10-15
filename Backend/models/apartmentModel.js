const mongoose = require('mongoose');

// Define the Apartment Schema
const apartmentSchema = new mongoose.Schema({
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

// Create the Apartment model
const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
