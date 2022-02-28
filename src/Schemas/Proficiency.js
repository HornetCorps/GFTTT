const mongoose = require("mongoose");
const { Schema } = mongoose;
const skillSchema = require("./Skill")

const proficiencySchema = new Schema({
    armor: [String],
    weapons: [String],
    tools: [String],
    saving_throws: [String],
    skills: [skillSchema],
    languages: [String],
})

module.exports = mongoose.model("Proficiency", proficiencySchema)