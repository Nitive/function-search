// @flow

const { createTrie, insertValue } = require('../trie')
/*::
import type { Trie } from '../trie'
*/

describe('trie', () => {
  it('insertValue should insert first value', () => {
    const trie /*: Trie */ = {
      root: true,
      leaves: {},
    }

    const value = { name: 'fa', date: 1 }

    const expectedTree /*: Trie */ = {
      root: true,
      leaves: {
        f: {
          values: [value],
          leaves: {
            a: {
              values: [value],
            },
          },
        },
      },
    }

    const result = insertValue(value, trie)
    expect(result).toEqual(expectedTree)
  })

  it('insertValue should insert second value', () => {
    const trie /*: Trie */ = {
      root: true,
      leaves: {
        f: {
          values: [{ name: 'fa', date: 1 }],
          leaves: {
            a: {
              values: [{ name: 'fa', date: 1 }],
            },
          },
        },
      },
    }

    const value = { name: 'fb', date: 1 }

    const expectedTree /*: Trie */ = {
      root: true,
      leaves: {
        f: {
          values: [{ name: 'fa', date: 1 }, value],
          leaves: {
            a: {
              values: [{ name: 'fa', date: 1 }],
            },
            b: {
              values: [value],
            },
          },
        },
      },
    }

    const result = insertValue(value, trie)
    expect(result).toEqual(expectedTree)
  })

  it('createTrie should work', () => {
    const values = [{ name: 'fa', date: 1 }, { name: 'fb', date: 1 }]

    const expectedTree /*: Trie */ = {
      root: true,
      leaves: {
        f: {
          values: [{ name: 'fa', date: 1 }, { name: 'fb', date: 1 }],
          leaves: {
            a: {
              values: [{ name: 'fa', date: 1 }],
            },
            b: {
              values: [{ name: 'fb', date: 1 }],
            },
          },
        },
      },
    }

    const result = createTrie(values)
    expect(result).toEqual(expectedTree)
  })
})
