const mongoose = require("mongoose");
const { Schema } = mongoose;
const raceSchema = require("./Race")
const skillSchema = require("./Skill")
const diceSchema = require("./Dice")
const proficiencySchema = require("./Proficiency")

const characterSchema = new Schema({
    name: { type: String, required: true }, // String is shorthand for {type: String}
    race: { type: raceSchema },
    class: {
        name: String,
        description: String,
        hit_die: diceSchema, // Common hit-die object
        primary_ability: [ skillSchema ],
        proficiencies: [ proficiencySchema ]
    },
    level: Number,
    attributes: {
        strength: {base: Number, modifier: Number},
        dexterity: {base: Number, modifier: Number},
        constitution: {base: Number, modifier: Number},
        intelligence: {base: Number, modifier: Number},
        wisdom: {base: Number, modifier: Number},
        charisma: {base: Number, modifier: Number},
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
    proficiencies: [ proficiencySchema ],
    traits: String,
    backstory: String,
    alignment: String,
    equipment: [String],
    features: [{
        name: String,
        level: Number
    }],
    isIncomplete: Boolean,
});