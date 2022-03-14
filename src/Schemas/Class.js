const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")
const equipmentSchema = require("./Equipment")
const diceSchema = require("./Dice");

const classSchema = new Schema({
    name: String,
    hitDie: diceSchema,
    proficiencies: [
        {
            subject: {type: String, required: true},
            modifier: {type: Number, required: false}
        }
    ],
    equipment: [equipmentSchema],
    feats: [featSchema]
})

module.exports = mongoose.model("Class", classSchema)