const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")
const equipmentSchema = require("./Equipment")

const backgroundSchema = new Schema({
    description: String,
    proficiencies: [
        {
            subject: {type: String, required: true},
            modifier: {type: Number, required: false}
        }
    ],
    feats: [featSchema],
    equipment: [equipmentSchema]
})

module.exports = mongoose.model("Background", backgroundSchema)