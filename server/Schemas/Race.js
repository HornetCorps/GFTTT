const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")

const raceSchema = new Schema({
    name: String,
    traits: [featSchema],
    size: {enum: ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan']},
    speed: Number,
    proficiencies: [
        {
            subject: {type: String, required: true},
            modifier: {type: Number, required: false}
        }
    ]
})

module.exports = mongoose.model("Race", raceSchema)