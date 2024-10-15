const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    image: String
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;
