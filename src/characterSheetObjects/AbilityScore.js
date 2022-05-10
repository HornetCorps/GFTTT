export class AbilityScore {
    #baseScore; #racialBonus; #abilityImprovements;
    #miscBonus; #otherModifier; #overrideScore;

    constructor(racialBonus = 0, abilityImprovements = 0, miscBonus = 0) {
        this.#racialBonus = racialBonus;
        this.#abilityImprovements = abilityImprovements;
        this.#miscBonus = miscBonus;
        this.#otherModifier = 0;
        this.#baseScore = 0;
    }

    set baseScore(amount) {
        this.#baseScore = (amount > 15 ? 15 : amount);
    }
    get baseScore() {
        return this.#baseScore;
    }

    set overrideBaseScore(amount) {
        this.#overrideScore = amount
    }

    get totalScore() {
        if (this.#overrideScore !== undefined) return this.#overrideScore;

        const result = this.#otherModifier + this.#baseScore + this.#racialBonus + this.#miscBonus
        return result > 15 ? 15 : result;
    }
    get modifier() {
        return Math.floor(this.totalScore - 10 / 2);
    }
}
