const mongoose = require("mongoose");

const subRaceSchema = new mongoose.Schema({
    subraceName: String,
    subraceDescription: String
})

module.exports = mongoose.model('Subraces', subraceSchema)