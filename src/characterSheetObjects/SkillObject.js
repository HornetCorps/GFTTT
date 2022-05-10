class OtherModifierSource {
    #sourceName; #amount;
    constructor(sourceName, amount) {
        this.#sourceName = sourceName;
        this.#amount = amount;
    }
    get sourceName() {
        return this.#sourceName;
    }
    get amount() {
        return this.#amount;
    }
}

export class SkillObject {
    name; #proficiency; #abilityModifier
    #OtherModifierSources;
    #proficiencyTypes = ['None', 'Half', 'Proficient',  'Expert']

    constructor(name) {
        this.name = name;
        this.#abilityModifier = 0;
        this.#proficiency = this.#proficiencyTypes[0];
        this.#OtherModifierSources = [];
    }

    get skillModifier() {
        return this.#OtherModifierSources.reduce(this.addOtherModifiersValues, 0)
            + this.#abilityModifier + this.getProficiencyModifier();
    }

    addOtherModifiersValues(total, num) {
        return total + num;
    }

    getProficiencyModifier() {
        switch (this.proficiency) {
            case 'None':
                return 0;
            case 'Half':
                return 0.5;
            case 'Proficient':
                return 1;
            case 'Expert':
                return 2;
            default:
                // TODO: This should prompt some error message
                return 0;
        }
    }

    // TODO: Get this to set the correct proficiency and add ability to have half proficiencies
    set abilityModifier(amount) {
        this.#abilityModifier = amount;
        this.proficiency = amount;
    }

    set proficiency(value) {
        if (value < 0) {
            this.#proficiency = this.#proficiencyTypes[0];
            return;
        }

        if (value > 2) {
            this.#proficiency = this.#proficiencyTypes[2];
            return;
        }

        this.#proficiency = this.#proficiencyTypes[value];
    }
    get proficiency() {
        return this.#proficiency;
    }

    addOtherModifierSource(sourceName, amount) {
        let modifierSource = new OtherModifierSource(sourceName, amount);
        this.#OtherModifierSources.concat(modifierSource)
    }

    removeOtherModifierSource(sourceName) {
        this.#OtherModifierSources.filter(obj => obj.sourceName !== sourceName);
    }
}