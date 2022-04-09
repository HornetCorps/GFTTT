import {AbilityScoresObject} from "./AbilityScoresObject.js";
import {SkillsAggregateObject} from "./SkillsAggregateObject.js";


export class Character {
    name; level; race; subrace; class; subclass; background;
    equipment; features; isIncomplete;

    // These need to be private so updates to ability scores can automatically
    // be applied to the skills table as well
    #abilityScores = new AbilityScoresObject();
    #skills = new SkillsAggregateObject();

    setStrengthAbilityModifier(amount) {
        this.#abilityScores.Strength.baseScore = amount;
        this.#skills.updateStrengthAbilityModifier(this.#abilityScores.Strength.modifier);
    }
    setDexterityAbilityModifier(amount) {
        this.#abilityScores.Dexterity.baseScore = amount;
        this.#skills.updateDexterityAbilityModifier(this.#abilityScores.Dexterity.modifier);
    }
    setIntelligenceAbilityModifier(amount) {
        this.#abilityScores.Intelligence.baseScore = amount;
        this.#skills.updateIntelligenceAbilityModifier(this.#abilityScores.Intelligence.modifier);
    }
    setWisdomAbilityModifier(amount) {
        this.#abilityScores.Wisdom.baseScore = amount;
        this.#skills.updateWisdomAbilityModifier(this.#abilityScores.Wisdom.modifier);
    }
    setCharismaAbilityModifier(amount) {
        this.#abilityScores.Charisma.baseScore = amount;
        this.#skills.updateCharismaAbilityModifier(this.#abilityScores.Charisma.modifier);
    }
    setConstitutionAbilityModifier(amount) {
        this.#abilityScores.Constitution.baseScore = amount;
    }

    get abilityScores() {
        return this.#abilityScores;
    }
    get skills() {
        return this.#skills
    }
}