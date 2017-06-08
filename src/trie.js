// @flow

/*::
type Value = {|
  name: string,
  date: number,
|}

type Leaves = { [key: string]: Trie }

export type Trie = {
  leaves?: Leaves,
  values?: Value[],
  root?: true,
}
*/

function compareNames(a /*: Value */, b /*: Value */) /*: 0 | 1 | -1 */ {
  if (a.name === b.name) {
    return 0;
  }
  return a.name > b.name ? 1 : -1
}

function compare(a /*: Value */, b /*: Value */) /*: 0 | 1 | -1 */ {
  if (a.date === b.date) {
    return compareNames(a, b)
  }
  return a.date < b.date ? 1 : -1
}

function insertIntoSortedArray(value /*: Value */, arr /*: Value[] */) /*: Value[] */ {
  if (arr.length === 0) {
    return [value]
  }

  if (arr.length === 1) {
    return compare(value, arr[0]) === 1 ? [arr[0], value] : [value, arr[0]]
  }

  const middleIndex = Math.floor(arr.length / 2)
  const first = arr.slice(0, middleIndex)
  const last = arr.slice(middleIndex)

  return compare(value, last[0]) === -1
    ? [...insertIntoSortedArray(value, first), ...last]
    : [...first, ...insertIntoSortedArray(value, last)]
}

function insertValueHelper(rest /*: string */, value /*: Value */, trie /*:? Trie */) /*: Trie */ {
  const newTrie /*: Trie */ = trie && trie.root
    ? { root: true, leaves: {} }
    : { values: trie && trie.values ? insertIntoSortedArray(value, trie.values) : [value] }

  const leaves = trie && trie.leaves;

  if (rest) {
    const nameKey = rest[0]
    newTrie.leaves = Object.assign({}, leaves, {
      [nameKey]: insertValueHelper(rest.slice(1), value, leaves && leaves[nameKey]),
    })
  }

  return newTrie;
}

function insertValue(value /*: Value */, trie /*: Trie */) /*: Trie */ {
  return insertValueHelper(value.name, value, trie)
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
  return r.values || []
}

module.exports = { createTrie, insertValue, findInTrie }
