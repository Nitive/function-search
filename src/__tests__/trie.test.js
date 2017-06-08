// @flow

const { createTrie, insertValue } = require('../trie')
/*::
import type { Trie } from '../trie'
*/

describe('trie', () => {
  it('insertValue should insert first value', () => {
    const trie /*: Trie */ = {
      leaves: {},
    }

    const value = { name: 'fa', date: '1' }

    const expectedTree /*: Trie */ = {
      leaves: {
        '1': {
          values: [value],
        },
        f: {
          leaves: {
            '1': {
              values: [value],
            },
            a: {
              leaves: {
                '1': {
                  values: [value],
                },
              },
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
      leaves: {
        '1': {
          values: [{ name: 'fa', date: '1' }],
        },
        f: {
          leaves: {
            '1': {
              values: [{ name: 'fa', date: '1' }],
            },
            a: {
              leaves: {
                '1': {
                  values: [{ name: 'fa', date: '1' }],
                },
              },
            },
          },
        },
      },
    }

    const value = { name: 'fb', date: '1' }

    const expectedTree /*: Trie */ = {
      leaves: {
        '1': {
          values: [{ name: 'fa', date: '1' }, value],
        },
        f: {
          leaves: {
            '1': {
              values: [{ name: 'fa', date: '1' }, value],
            },
            a: {
              leaves: {
                '1': {
                  values: [{ name: 'fa', date: '1' }],
                },
              },
            },
            b: {
              leaves: {
                '1': {
                  values: [value],
                },
              },
            },
          },
        },
      },
    }

    const result = insertValue(value, trie)
    expect(result).toEqual(expectedTree)
  })

  it('createTrie should work', () => {
    const values = [{ name: 'fa', date: '1' }, { name: 'fb', date: '1' }]

    const expectedTree /*: Trie */ = {
      leaves: {
        '1': {
          values,
        },
        f: {
          leaves: {
            '1': {
              values,
            },
            a: {
              leaves: {
                '1': {
                  values: [{ name: 'fa', date: '1' }],
                },
              },
            },
            b: {
              leaves: {
                '1': {
                  values: [{ name: 'fb', date: '1' }],
                },
              },
            },
          },
        },
      },
    }

    const result = createTrie(values)
    expect(result).toEqual(expectedTree)
  })
})
