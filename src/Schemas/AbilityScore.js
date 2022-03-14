const mongoose = require("mongoose");
const { Schema } = mongoose;

const abilityScoreSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
    },
    amount: {
        type: Number,
        required: true
    }
})

ability_scoreSchema.methods.score = function (ability) {
    return ability.base + ability.adjustment;
}

module.exports = mongoose.model("AbilityScore", diceSchema)