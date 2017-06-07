// @flow

const { zip } = require('./utils/zip')

/*::
type SuggestItem = {|
  functionName: string,
  modificationDate: number,
|}
*/

const MAX_SUGGEST_SIZE = 12

let suggestItems /*: SuggestItem[]*/

function refresh(functionNames /*: string[]*/, modificationDates /*: number[]*/) {
  suggestItems = zip(functionNames, modificationDates).map(([name, date]) => ({
    functionName: name,
    modificationDate: date,
  }))
}

function guess(start /*: string */) /*: string[] */ {
  return suggestItems
    .filter(({ functionName }) => functionName.startsWith(start))
    .sort(({ modificationDate: aDate }, { modificationDate: bDate }) => {
      if (aDate === bDate) {
        return 0
      }

      return aDate < bDate ? 1 : -1
    })
    .map(({ functionName }) => functionName)
    .slice(0, MAX_SUGGEST_SIZE)
}

module.exports = { refresh, guess }
