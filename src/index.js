// @flow

const { zip } = require('./utils/zip')
const { createTrie, findInTrie } = require('./trie')

const MAX_SUGGEST_SIZE = 12

let trie

function refresh(functionNames /*: string[] */, modificationDates /*: number[] */) {
  const values = zip(functionNames, modificationDates)
    .map(([name, date]) => ({ name, date }))
  trie = createTrie(values)
}

function guess(start /*: string */) /*: string[] */ {
  return findInTrie(start, trie)
    .map(({ name }) => name)
    .slice(0, MAX_SUGGEST_SIZE)
}

module.exports = { refresh, guess }
