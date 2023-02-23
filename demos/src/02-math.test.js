const { sum, multiply, divide } = require("./02-math");

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});
