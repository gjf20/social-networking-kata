import {List} from 'linked-list'

export default class Wall {
    constructor(ownerTimeline) {
      this.following = new List(ownerTimeline)
      this.view = function() {
        const timelines = this.following.toArray()
        var feed = ""
        timelines.forEach(timeline => {
          const posts = timeline.posts.toArray()
          posts.forEach(post => {
            feed += timeline.owner + " - " + post.message + " " + post.getTimeSince()
          })
        })

        return feed.length == 0 ? "No Posts Yet" : feed
      }
    }
}