const mongoose = require("mongoose");
const { Schema } = mongoose;

const raceSchema = new Schema({
    name: String,
    creature_type: String,
    age: Number,
    weight: Number,
    speed: Number,
    vision: String,
    racial_traits: [String],
    skill_proficiencies: [{attribute: String, modifier: Number}]
})

module.exports = mongoose.model("Race", raceSchema)