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

describe("Post time since string", () => {
  test("1 second ago", () => {
    const expectedMessage = "(1 second ago)"
    const currentDate = new Date()
    const millisSince = 1 * 1000
    const timeDiff = currentDate.getTime() - millisSince
    const postDate = new Date(timeDiff)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });
  
  test("10 seconds ago", () => {
    const expectedMessage = "(10 seconds ago)"
    const currentDate = new Date()
    const millisSince = 10 * 1000
    const timeDiff = currentDate.getTime() - millisSince
    const postDate = new Date(timeDiff)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("1 minute ago", () => {
    const expectedMessage = "(1 minute ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const minuteAgo = currentDate.getTime() - minuteInMillis
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("2 minutes ago", () => {
    const expectedMessage = "(2 minutes ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const timeDiff = minuteInMillis * 2
    const minuteAgo = currentDate.getTime() - timeDiff
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("1 hour ago", () => {
    const expectedMessage = "(1 hour ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const hourInMinutes = 60
    const timeDiff = minuteInMillis * hourInMinutes
    const minuteAgo = currentDate.getTime() - timeDiff
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("2 hours ago", () => {
    const expectedMessage = "(2 hours ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const hourInMinutes = 60
    const timeDiff = minuteInMillis * hourInMinutes * 2 
    const minuteAgo = currentDate.getTime() - timeDiff
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("1 day ago", () => {
    const expectedMessage = "(1 day ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const hourInMinutes = 60
    const dayInHours = 24
    const timeDiff = minuteInMillis * hourInMinutes * dayInHours
    const minuteAgo = currentDate.getTime() - timeDiff
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });

  test("2 days ago", () => {
    const expectedMessage = "(2 days ago)"
    const currentDate = new Date()
    const minuteInMillis = 60 * 1000
    const hourInMinutes = 60
    const dayInHours = 24
    const timeDiff = minuteInMillis * hourInMinutes * dayInHours * 2 
    const minuteAgo = currentDate.getTime() - timeDiff
    const postDate = new Date(minuteAgo)

    const subject = new Post(postDate)
    expect(subject.getTimeSince()).toBe(expectedMessage);
  });
});