#Running Tests:

Install Node and npm with [nvm](https://github.com/nvm-sh/nvm)
`nvm install 16`
`nvm use 16`

Install jest (along with other packages) with npm:
`npm install --save-dev jest`
 - This should have generated a node_modules directory

 Install linked-list:
 `npm install linked-list`

 Install babel/preset-env:
 `npm install --save-dev @babel/preset-env`

Run the test scripts:
`npm run test`


#Code Description

This project provides Post, Timeline, and Wall classes to implement the domain functions of a social networking application.

The Post class takes a date and a message and formats the time since the Post's date.

The Timeline class collects Posts in reverse-chronological order and formats Post information differently depending on who is viewing the Timeline.

The Wall class collects Timelines through following and displays Posts indicating the who created the post.  The order of displayed posts is currently based off of which Timeline was followed most recently, but should be fixed to display posts in reverse-chronological order across all timelines.