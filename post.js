import {Item} from 'linked-list'

const minuteInSeconds = 60
const hourInSeconds = minuteInSeconds * 60
const dayInSeconds = hourInSeconds * 24

export default class Post extends Item {
    constructor(date, message) {
      super()
      this.date = date
      this.message = message
      this.getTimeSince = function() {
        const currTime = new Date()
        const diff = currTime.getTime() - this.date.getTime()
        const secondsSince = diff / 1000
        var unit 
        var unitsSince
        
        if (secondsSince < minuteInSeconds) {
          unit = "second"
          unitsSince = Math.round(secondsSince)
        } else if (secondsSince < hourInSeconds) {
          unit = "minute"
          unitsSince = Math.round(secondsSince / minuteInSeconds)
        } else if (secondsSince < dayInSeconds){
          unit = "hour"
          unitsSince = Math.round(secondsSince / hourInSeconds)
        } else {
          unit = "day"
          unitsSince = Math.round(secondsSince / dayInSeconds)
        }
        
        const singular = unitsSince == 1

        return `(${unitsSince} ${unit}${singular ? "" : "s"} ago)`
      }
    }
}

module.exports = Post