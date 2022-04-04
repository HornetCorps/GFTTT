const mongoose = require("mongoose");

const subclassSchema = new mongoose.Schema({
    subclassName: String,
    subclassDescription: String
})

module.exports = mongoose.model('Subclasses', subclassSchema)