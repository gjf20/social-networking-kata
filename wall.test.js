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

  test("Wall multiple posts by time", () => {
    const alice = new Timeline("Alice")
    const ben = new Timeline("ben")
    const subject = new Wall(alice)
    subject.follow(ben)

    const date = new Date()
    const message = "hello world"
    const alicePost = new Post(date, message)

    const currDate = new Date() //TODO extract this into a test helper
    const millisSince = 1 * 1000
    const timeDiff = currDate.getTime() - millisSince
    const benDate = new Date(timeDiff)

    const benMessage = "hello world ben"
    const benPost = new Post(benDate, benMessage)

    alice.publish(alicePost)
    ben.publish(benPost)

    var expectedFeed = "Alice - " + alicePost.message + " " + alicePost.getTimeSince()
    expectedFeed += "ben - " + benPost.message + " " + benPost.getTimeSince() //TODO add newlines between posts
    
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

