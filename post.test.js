const Post = require("./post.js");

describe("Post instance variables", () => {
  test("Post contains date", () => {
    const date = new Date()
    const subject = new Post(date)
    expect(subject.date).toBe(date);
  });

  test("Post contains message string", () => {
    const message = "Hello world"
    const subject = new Post(undefined, message)
    expect(subject.message).toBe(message);
  });
});