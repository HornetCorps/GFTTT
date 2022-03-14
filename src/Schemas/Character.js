const mongoose = require("mongoose");
const { Schema } = mongoose;
const raceSchema = require("./Race")
const skillSchema = require("./Skill")
const diceSchema = require("./Dice")
const proficiencySchema = require("./Proficiency")
const subraceSchema = require('./Subrace')
const classSchema = require('./Class')
const subclassSchema = require('./Subclass')
const backgroundSchema = require('./Background')
const featSchema = require('./Feats')

const characterSchema = new Schema({
    name: { type: String, required: true }, // String is shorthand for {type: String}
    level: Number,
    race: { type: raceSchema },
    subrace: {type: subraceSchema, required: false},
    class: { type: classSchema, required: true},
    subclass: { type: subclassSchema, required: false},
    background: {type: backgroundSchema, required: true},
    ability_scores: {
        strength: {base: Number, modifier: Number, adjustments: [featSchema]},
        dexterity: {base: Number, modifier: Number, adjustments: [featSchema]},
        constitution: {base: Number, modifier: Number, adjustments: [featSchema]},
        intelligence: {base: Number, modifier: Number, adjustments: [featSchema]},
        wisdom: {base: Number, modifier: Number, adjustmenst: [featSchema]},
        charisma: {base: Number, modifier: Number, adjustments: [featSchema]},
    },
    skills: {
        acrobatics: skillSchema,
        animal_handling: skillSchema,
        arcana: skillSchema,
        athletics: skillSchema,
        deception: skillSchema,
        history: skillSchema,
        insight: skillSchema,
        intimidation: skillSchema,
        investigation: skillSchema,
        medicine: skillSchema,
        nature: skillSchema,
        perception: skillSchema,
        performance: skillSchema,
        persuasion: skillSchema,
        religion: skillSchema,
        sleight_of_hand: skillSchema,
        stealth: skillSchema,
        survival: skillSchema
    },
    equipment: [String],
    features: [{
        name: String,
        description: String,
        mechanical_changes: [String]
    }],
    isIncomplete: Boolean,
});