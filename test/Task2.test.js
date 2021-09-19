const findNumbersHigherThenSeven = require("../src/Task2");

describe("Tests for task 2", () => {
    const numbers = [3, 6, 5, 45, 8, 38];

    test(`count of higher then seven numbers should equal 3`, () => {
        const result = findNumbersHigherThenSeven(numbers);
  
        expect(result.countOfSevenNumbers).toBe(3);
    });

    test(`all numbers higher then 7 should be changed with 7`, () => {
        const actualResult = findNumbersHigherThenSeven(numbers);
        const expectedResult = [3, 6, 5, 7, 7, 7];
  
        expect(actualResult.updatedArray).toStrictEqual(expectedResult);
    });
})