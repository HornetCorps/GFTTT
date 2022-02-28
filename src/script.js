const mongoose = require("mongoose");
const Character = require("./Schemas/Character")
const raceSchema = require("./Schemas/Race");
const diceSchema = require("./Schemas/Dice");
const skillSchema = require("./Schemas/Skill");
const proficiencySchema = require("./Schemas/Proficiency");



async function run() {
    try {
        await mongoose.connect("mongodb://localhost:27017/GFTTT");
        const character = new Character({
            name: "Gerald"
        });
        character.save()
            .then( result => { console.log(result) } )
            .catch( err => { console.log(err) });

    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);