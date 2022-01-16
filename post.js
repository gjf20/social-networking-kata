const minuteInSeconds = 60
const hourInSeconds = minuteInSeconds * 60
const dayInSeconds = hourInSeconds * 24

class Post {
    constructor(date, message) {
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
          unitsSince = secondsSince
        } else if (secondsSince < hourInSeconds) {
          unit = "minute"
          unitsSince = secondsSince / minuteInSeconds
        } else if (secondsSince < dayInSeconds){
          unit = "hour"
          unitsSince = secondsSince / hourInSeconds
        } else {
          unit = "day"
          unitsSince = secondsSince / dayInSeconds
        }
        
        const singular = unitsSince == 1

        return `(${unitsSince} ${unit}${singular ? "" : "s"} ago)`
      }
    }
}

module.exports = Post