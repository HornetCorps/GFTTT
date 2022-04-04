const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema({
    backgroundDescription: String
})

module.exports = mongoose.model('Backgrounds', backgroundSchema)