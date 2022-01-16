import Timeline from "./timeline.js";
const Post = require("./post.js");

describe("Timeline view", () => {
  test("Timeline empty state", () => {
    const subject = new Timeline()
    const expectedPosts = "No posts yet"

    expect(subject.view()).toBe(expectedPosts);
  });

  test("Timeline non-owner view published post", () => {
    
    const subject = new Timeline("Alice")
    const date = new Date()
    const message = "hello world"
    const post = new Post(date, message)
    const expectedPosts = post.message + " " + post.getTimeSince()

    subject.publish(post)
    
    expect(subject.view()).toBe(expectedPosts);
  });

  test("Timeline view by owner", () => {
    const owner = "Alice"
    const subject = new Timeline(owner)
    const date = new Date()
    const message = "hello world"
    const post = new Post(date, message)
    const expectedPosts = post.message

    subject.publish(post)
    
    expect(subject.view(owner)).toBe(expectedPosts);
  });
});

describe("Timeline publish", () => {
  test("Timeline first post", () => {
    
    const subject = new Timeline()
    const date = new Date()
    const message = "hello world"
    const post = new Post(date, message)

    subject.publish(post)
    
    expect(subject.posts.size).toBe(1);
  });
});

