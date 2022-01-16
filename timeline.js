import {List} from 'linked-list'

export default class Timeline {
    constructor(owner) {
      this.owner = owner
      this.posts = new List()
      this.view = function (viewer) {
        if (this.posts.size == 0) {
          return "No posts yet"
        }
        var feed = ""

        const postArr = this.posts.toArray()
        postArr.forEach(post => {
          feed += post.message 
          if(this.owner != viewer) {
              feed += " " + post.getTimeSince()
          }
        });
        
        return feed
      }
      this.publish = function(post) {
        this.posts.prepend(post)
      }
    }
}