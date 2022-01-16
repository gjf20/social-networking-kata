import {List} from 'linked-list'

export default class Timeline {
    constructor() {
      this.posts = new List()
      this.view = function () {
        return "No posts yet"
      }
      this.publish = function(post) {
        this.posts.prepend(post)
      }
    }
}