import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {SkillsAggregateObject} from "./SkillsAggregateObject.js";


test('Should be able to create a SkillsAggregate Object', () => {
    const testSkillsAggregateObject = new SkillsAggregateObject();

    expect(testSkillsAggregateObject).toBeTruthy();
})

test('Should update skills based on ability type', () => {
    const testSkillsAggregateObject = new SkillsAggregateObject();

    expect(testSkillsAggregateObject.athletics.proficiency).toBe('None');

    testSkillsAggregateObject.updateStrengthAbilityModifier(5)
    expect(testSkillsAggregateObject.athletics.proficiency).toBe('None');
})