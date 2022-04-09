import {SkillObject} from './SkillObject.js'

export class SkillsAggregateObject {
    acrobatics = new SkillObject('acrobatics');
    animal_handling = new SkillObject('animal_handling');
    arcana = new SkillObject('arcana');
    athletics = new SkillObject('athletics');
    deception = new SkillObject('deception');
    history = new SkillObject('history');
    insight = new SkillObject('insight');
    intimidation = new SkillObject('intimidation');
    investigation = new SkillObject('investigation');
    medicine = new SkillObject('medicine');
    nature = new SkillObject('nature');
    perception = new SkillObject('perception');
    performance = new SkillObject('performance');
    persuasion = new SkillObject('persuasion');
    religion = new SkillObject('religion');
    sleight_of_hand = new SkillObject('sleight_of_hand');
    stealth = new SkillObject('stealth');
    survival = new SkillObject('survival');

    // TODO: A more appropriate name should be given to these functions
    updateStrengthAbilityModifier(newModifier) {
        this.athletics.abilityModifier = newModifier;
    }
    updateDexterityAbilityModifier(newModifier) {
        this.acrobatics.abilityModifier = newModifier;
        this.sleight_of_hand.abilityModifier = newModifier;
        this.stealth.abilityModifier = newModifier;
    }
    updateIntelligenceAbilityModifier(newModifier) {
        this.arcana.abilityModifier = newModifier;
        this.history.abilityModifier = newModifier;
        this.investigation.abilityModifier = newModifier;
        this.nature.abilityModifier = newModifier;
        this.religion.abilityModifier = newModifier;
    }
    updateWisdomAbilityModifier(newModifier) {
        this.animal_handling.abilityModifier = newModifier;
        this.insight.abilityModifier = newModifier;
        this.medicine.abilityModifier = newModifier;
        this.perception.abilityModifier = newModifier;
        this.survival.abilityModifier = newModifier;
    }
    updateCharismaAbilityModifier(newModifier) {
        this.deception.abilityModifier = newModifier;
        this.intimidation.abilityModifier = newModifier;
        this.performance.abilityModifier = newModifier;
        this.persuasion.abilityModifier = newModifier;
    }

}