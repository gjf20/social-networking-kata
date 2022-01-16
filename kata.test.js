const hello = require("./kata.js");

describe("the tests are grouped", () => {


  test("the tests run", () => {
    expect(hello()).toBe("hello world!");
  });
});