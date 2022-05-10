import {AbilityScoresObject} from "./AbilityScoresObject.js";
import {SkillsAggregateObject} from "./SkillsAggregateObject.js";


export class Character {
    // By commenting out these fields, we can more easily tell which are fully implemented and ready to use
    /*name;*/ /*level;*/ /*race;*/ /*subrace;*/ /*class;*/ /*subclass;*/ /*background;*/
    /*equipment;*/ /*features;*/ /*isIncomplete;*/

    /*  These need to be private so updates to ability scores can automatically
        be applied to the skills table as well */
    #abilityScores = new AbilityScoresObject();
    #skills = new SkillsAggregateObject();

    // Ability Score Setter/Getters
    set StrengthBaseScore(amount) {
        this.#abilityScores.Strength.baseScore = amount;
        this.#skills.updateStrengthAbilityModifier(this.#abilityScores.Strength.modifier);
    }
    get StrengthBaseScore() {
        return this.#abilityScores.Strength.baseScore;
    }

    set DexterityBaseScore(amount) {
        this.#abilityScores.Dexterity.baseScore = amount;
        this.#skills.updateDexterityAbilityModifier(this.#abilityScores.Dexterity.modifier);
    }
    get DexterityBaseScore() {
        return this.#abilityScores.Dexterity.baseScore;
    }

    set IntelligenceBaseScore(amount) {
        this.#abilityScores.Intelligence.baseScore = amount;
        this.#skills.updateIntelligenceAbilityModifier(this.#abilityScores.Intelligence.modifier);
    }
    get IntelligenceBaseScore() {
        return this.#abilityScores.Intelligence.baseScore;
    }

    set WisdomBaseScore(amount) {
        this.#abilityScores.Wisdom.baseScore = amount;
        this.#skills.updateWisdomAbilityModifier(this.#abilityScores.Wisdom.modifier);
    }
    get WisdomBaseScore() {
        return this.#abilityScores.Wisdom.baseScore;
    }

    set CharismaBaseScore(amount) {
        this.#abilityScores.Charisma.baseScore = amount;
        this.#skills.updateCharismaAbilityModifier(this.#abilityScores.Charisma.modifier);
    }
    get CharismaBaseScore() {
        return this.#abilityScores.Charisma.baseScore;
    }

    set ConstitutionBaseScore(amount) {
        this.#abilityScores.Constitution.baseScore = amount;
    }
    get ConstitutionBaseScore() {
        return this.#abilityScores.Constitution.baseScore;
    }

    // Skills Getters
    // Note: this is probably not the best way to pass the skills object. I think this might expose too much data.
    get skills() {
        return this.#skills;
    }


    // get abilityScores() {
    //     return this.#abilityScores;
    // }
    // get skills() {
    //     return this.#skills;
    // }
}