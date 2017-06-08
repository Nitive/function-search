var R = require('ramda')

function makeid() {
  var text = ''
  var possible = 'cfneqazr'
  var length = Math.round(Math.random() * 32) + 1

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

const names = R.range(0, 100000).map(item => makeid())
const dates = R.range(0, 100000).map((item, index) => Math.random())

module.exports = {
  names,
  dates,
}
