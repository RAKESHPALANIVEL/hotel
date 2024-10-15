const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    area: { type: String, required: true },
    image: { type: String, required: true }
});

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;