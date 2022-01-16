import Wall from "./wall.js";
import Timeline from "./timeline.js";
const Post = require("./post.js");

describe("Wall view", () => {
  test("Wall empty view always follows the wall owner", () => {
    
    const alice = new Timeline("Alice")
    const subject = new Wall(alice)
    
    expect(subject.view()).toBe("No Posts Yet");
    expect(subject.following.size).toBe(1);
  });

  test("Wall first post", () => {
    const alice = new Timeline("Alice")
    const subject = new Wall(alice)
    const date = new Date()
    const message = "hello world"
    const post = new Post(date, message)

    alice.publish(post)

    const expectedFeed = "Alice - " + post.message + " " + post.getTimeSince()
    
    expect(subject.view()).toBe(expectedFeed);
  });
});

describe("Wall Follow", () => {
  test("Wall no follows", () => {
    const alice = new Timeline("Alice")
    const subject = new Wall(alice)
    
    expect(subject.following.size).toBe(1);
  });

  test("Wall follow", () => {
    const alice = new Timeline("Alice")
    const ben = new Timeline("Ben")
    const subject = new Wall(alice)

    subject.follow(ben)
    
    expect(subject.following.size).toBe(2);
  });

  //TODO do not allow a wall to follow the same timeline twice
});

