// @flow

const { zip } = require('./utils/zip')
const { createTrie, findInTrie } = require('./trie')
/* import type { Trie } from './trie' */

const MAX_SUGGEST_SIZE = 12

let trie /*: Trie */

function refresh(functionNames /*: string[] */, modificationDates /*: number[] */) {
  const values = zip(functionNames, modificationDates)
    .map(([name, date]) => ({
      name,
      date: date.toString().padStart(13, '0'),
    }))
  trie = createTrie(values)
}

function guess(start /*: string */) /*: string[] */ {
  return findInTrie(start, trie)
    .sort((a, b) => {
      if (a.date === b.date) {
        return 0
      }

      return a.date < b.date ? 1 : -1
    })
    .map(({ name }) => name)
    .slice(0, MAX_SUGGEST_SIZE)
}

module.exports = { refresh, guess }
