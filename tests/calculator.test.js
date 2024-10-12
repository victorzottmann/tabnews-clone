const calculator = require("../models/calculator.js");

test("Adding 2 + 2 should return 4", () => {
  const result = calculator.add(2, 2);
  expect(result).toBe(4);
});

test("Adding 'banana' + 100 should return 'Error'", () => {
  const result = calculator.add("banana", 100);
  expect(result).toBe("Error");
});
