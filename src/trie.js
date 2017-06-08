// @flow

const { mapObj } = require('./utils/mapObj')

/*::
type Value = {|
  name: string,
  date: number,
|}

export type Trie = {
  leaves?: { [key: string | number]: Trie },
  value?: Value,
}
*/

const mapTrie = (f /*: (value: Value) => Value */, trie /*: Trie */) /*: Trie */ => {
  const newTrie /*: Trie */ = {}
  const { value, leaves } = trie;
  if (value) {
    newTrie.value = f(value)
  }
  if (leaves) {
    newTrie.leaves = mapObj((leaf /*: Trie */) => mapTrie(f, leaf), leaves)
  }
  return newTrie
}


function createTrie(values /*: Value[] */) /*: Trie */ {
}

module.exports = { createTrie, mapTrie }
