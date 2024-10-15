const mongoose = require('mongoose');

const subletSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    image: String
});

module.exports = mongoose.model('Sublet', subletSchema);
