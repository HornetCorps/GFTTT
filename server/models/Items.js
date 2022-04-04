const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: String,
    itemDescription: String
})

module.exports = mongoose.model('Items', itemSchema)