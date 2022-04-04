const mongoose = require("mongoose");

const featsSchema = new mongoose.Schema({
    featDescription: String
})

module.exports = mongoose.model('Feats', featsSchema)