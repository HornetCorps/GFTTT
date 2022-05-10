import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {SkillObject} from "./SkillObject.js";


test('Should be able to create a Skill Object', () => {
    const testSkillObject = new SkillObject('test');

    expect(testSkillObject).toBeTruthy();
})