const mongoose = require("mongoose");
const { Schema } = mongoose;

const diceSchema = new Schema({
    value: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Dice", diceSchema)