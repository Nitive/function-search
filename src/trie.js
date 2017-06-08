// @flow

/*::
type Value = {|
  name: string,
  date: string,
|}

export type Trie = {
  leaves?: { [key: string]: Trie },
  values?: Value[],
}
*/

function helper(rest /*: Value */, value /*: Value */, trie /*:? Trie */) /*: Trie */ {
  const newTrie /*: Trie */ = {}
  const leaves = trie && trie.leaves;

  if (rest.name) {
    const nameKey = rest.name[0]
    const dateKey = rest.date[0]
    newTrie.leaves = Object.assign({}, leaves, {
      [nameKey]: helper({ name: rest.name.slice(1), date: rest.date }, value, leaves && leaves[nameKey]),
      [dateKey]: helper({ name: '', date: rest.date.slice(1) }, value, leaves && leaves[dateKey])
    })
    return newTrie;
  }

  if (rest.date) {
    if (trie && trie.values) {
      newTrie.values = trie.values
    }
    const dateKey = rest.date[0]
    newTrie.leaves = Object.assign({}, leaves, {
      [dateKey]: helper({ name: '', date: rest.date.slice(1) }, value, leaves && leaves[dateKey])
    })
    return newTrie;
  }

  if (trie && trie.values) {
    newTrie.values = [...trie.values, value]
  } else {
    newTrie.values = [value]
  }
  return newTrie;
}

function insertValue(value /*: Value */, trie /*: Trie */) /*: Trie */ {
  return helper(value, value, trie)
}

function createTrie(values /*: Value[] */) /*: Trie */ {
  return values.reduce((trie, value) => insertValue(value, trie), { leaves: {} })
}

module.exports = { createTrie, insertValue }
