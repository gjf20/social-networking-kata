import {List} from 'linked-list'

export default class Timeline {
    constructor() {
      this.posts = new List()
      this.view = function () {
        if (this.posts.size == 0) {
          return "No posts yet"
        }
        var feed = ""

        const postArr = this.posts.toArray()
        postArr.forEach(post => {
          feed += post.message + " " + post.getTimeSince()
        });
        
        return feed
      }
      this.publish = function(post) {
        this.posts.prepend(post)
      }
    }
}