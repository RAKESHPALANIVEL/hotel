const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    image: String,
    category: String, // Added category field
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
