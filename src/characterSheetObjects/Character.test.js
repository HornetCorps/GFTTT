import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {Character} from "./Character.js";


test('Should be able to create a character', () => {
    const testCharacter = new Character();

    expect(testCharacter).toBeTruthy();
})

test('Should be able to modify the ability scores', () => {
    const testCharacter = new Character();

    expect(testCharacter.StrengthBaseScore).toBe(0);

    testCharacter.StrengthBaseScore = 10
    expect(testCharacter.StrengthBaseScore).toBe(10);

    testCharacter.StrengthBaseScore = 100
    expect(testCharacter.StrengthBaseScore).toBe(15);
})

test('Ability scores should affect skills', () => {
    const testCharacter = new Character();

    expect(testCharacter.StrengthBaseScore).toBe(0);
    expect(testCharacter.skills.athletics.proficiency).toBe("None");

    testCharacter.StrengthBaseScore = 10
    expect(testCharacter.StrengthBaseScore).toBe(10);
    expect(testCharacter.skills.athletics.proficiency).toBe("None");

    testCharacter.StrengthBaseScore = 100
    expect(testCharacter.StrengthBaseScore).toBe(15);
    expect(testCharacter.skills.athletics.proficiency).toBe("None");
})