const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: String,
    classDescription: String
})

module.exports = mongoose.model('Classes', classSchema)