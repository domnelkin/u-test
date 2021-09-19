const findCountOfHundreds = require("../src/Task1");

describe("Tests for task 1", () => {
  const dataProvider = [
    {number: 5000, count: 50}, 
    {number: 356, count: 3}, 
    {number: 104, count: 1}, 
    {number: 2956, count: 29}, 
    {number: 13, count: 0}
  ];

  dataProvider.forEach(data => {
    test(`number ${data.number} should contain ${data.count} hundreds`, () => {
      const result = findCountOfHundreds(data.number);

      expect(result).toBe(data.count);
    });
  });
})