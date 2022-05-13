import '@testing-library/jest-dom/extend-expect';
import { rollScore } from '../pages/AbScorePane.js';

test("Test the roll score function to make sure it's in the range between 3-18", () => {
    let count = 0; 
    for (let i = 0; i < 100; i++) { 
        let roll = rollScore(); 
        if(roll < 3 || roll > 18) { 
            count++; 
        }
    }
    expect(count).toBe(0); 
})