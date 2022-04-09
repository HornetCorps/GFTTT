const mongoose = require("mongoose");
const { Schema } = mongoose;
const featSchema = require("./Feats")

const equipmentSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model("Equipment", equipmentSchema)