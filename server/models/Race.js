const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
    raceName: String,
    raceDescription: String
})

module.exports = mongoose.model('Races', raceSchema)