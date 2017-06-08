// @flow

/*::
export type Trie<T> = {
  type: 'node',
  leaves: { [key: string | number]: Trie<T> },
} | {
  type: 'target',
  value: T,
}
*/

function createTrie /*:: <T>*/(data /*: T*/) /*: Trie<T> */ {
}

module.exports = { createTrie }
