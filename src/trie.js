// @flow

/*::
type Value = {|
  name: string,
  date: number,
|}

type SpectialTrie
  = { values: Value[] }
  | { root: true, leaves: Leaves }

type Leaves = { [key: string]: Trie }

export type Trie
  = { leaves: Leaves } & SpectialTrie
*/

function helper(rest /*: string */, value /*: Value */, trie /*:? Trie */) /*: Trie */ {
  const newTrie /*: Trie */ = trie && trie.root
    ? { root: true }
    : { values: trie ? [...trie.values, value] : [value] }
  const leaves = trie && trie.leaves;

  if (rest) {
    const nameKey = rest[0]
    newTrie.leaves = Object.assign({}, leaves, {
      [nameKey]: helper(rest.slice(1), value, leaves && leaves[nameKey]),
    })
  }

  return newTrie;
}

function insertValue(value /*: Value */, trie /*: Trie */) /*: Trie */ {
  return helper(value.name, value, trie)
}

function createTrie(values /*: Value[] */) /*: Trie */ {
  return values.reduce((trie, value) => insertValue(value, trie), { root: true })
}

function findInTrie(start /*: string */, trie /*: Trie */) /*: Value[] */ {
  const r = start.split('').reduce((trie, key) => {
    return trie.leaves && trie.leaves[key]
      ? trie.leaves[key]
      : { values: [] }
  }, trie)
  return r.values
}

module.exports = { createTrie, insertValue, findInTrie }
