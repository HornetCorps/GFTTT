const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")
const equipmentSchema = require("./Equipment");

const subclassSchema = new Schema({
    name: String,
    proficiencies: [
        {
            subject: {type: String, required: true},
            modifier: {type: Number, required: false}
        }
    ],
    equipment: [equipmentSchema],
    feats: [featSchema]
})

module.exports = mongoose.model("Subclass", subclassSchema)