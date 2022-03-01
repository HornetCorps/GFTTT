const mongoose = require("mongoose");
const { Schema } = mongoose;

const diceSchema = new Schema({
    value: {
        type: Number,
        required: true
    }
})

diceSchema.methods.diceName = function () {
    return 'd' + toString(${this.value});
}

module.exports = mongoose.model("Dice", diceSchema)