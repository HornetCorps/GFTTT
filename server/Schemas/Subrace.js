const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")

const subraceSchema = new Schema({
    name: String,
    traits: [featSchema],
    proficiencies: [
        {
            subject: {type: String, required: true},
            modifier: {type: Number, required: false}
        }
    ],
})

module.exports = mongoose.model("Subrace", subraceSchema)