const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
    name: {
        type: String,
        required: false,
        enum: ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight',
            'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion',
            'religion', 'sleight_of_hand', 'stealth', 'survival']
    },
    base: {
        type: Number,
        required: true
    },
    proficiency: {
        type: String,
        required: true,
        enum: ['none', 'half', 'proficient', 'expert']
    }
})

module.exports = mongoose.model("Skill", skillSchema)