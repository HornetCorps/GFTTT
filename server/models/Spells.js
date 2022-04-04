const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
    spellName: String,
    spellDescription: String
})

module.exports = mongoose.model('Spells', spellSchema)