const mongoose = require("mongoose");
const { Schema } = mongoose;
const abilityScoreSchema = require("./AbilityScore")

const featSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    modifiers: [
        {
            abilityScore: {type: abilityScoreSchema, required: true},
            adjustment: {type: Number, required: true}
        }
    ]
})

module.exports = mongoose.model("Feat", diceSchema)