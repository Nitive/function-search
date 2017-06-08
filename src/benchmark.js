const { names, dates } = require('./genData')
const { guess, refresh } = require('./')

console.time('refresh one time')
refresh(names, dates)
console.timeEnd('refresh one time')

console.time('guess 100 000 times')
names.forEach(name => {
  guess(name)
})
console.timeEnd('guess 100 000 times')
