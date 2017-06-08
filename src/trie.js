// @flow

const { mapObj } = require('./utils/mapObj')

/*::
type Value = {|
  name: string,
  date: number,
|}

export type Trie = {
  leaves?: { [key: string | number]: Trie },
  values?: Value[],
}
*/

const mapTrie = (f /*: (value: Value) => Value */, trie /*: Trie */) /*: Trie */ => {
  const newTrie /*: Trie */ = {}
  const { values, leaves } = trie;
  if (values) {
    newTrie.values = values.map(f)
  }
  if (leaves) {
    newTrie.leaves = mapObj((leaf /*: Trie */) => mapTrie(f, leaf), leaves)
  }
  return newTrie
}

function insertValue(value /*: Value */, trie /*: Trie */) /*: Trie */ {
  return trie
}

function createTrie(values /*: Value[] */) /*: Trie */ {
}

module.exports = { createTrie, mapTrie, insertValue }
