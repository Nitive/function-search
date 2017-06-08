// @flow

const { createTrie } = require('../trie')
/*::
import type { Trie } from '../trie'
*/

describe('trie', () => {
  it('should convert to trie', () => {})
  const data = [{ name: 'foo', date: 12 }, { name: 'bar', date: 3 }, { name: 'baz', date: 3 }]
  const expectedTree /*: Trie<{ name: string, date: number }>*/ = {
    type: 'node',
    leaves: {
      f: {
        type: 'node',
        leaves: {
          o: {
            type: 'node',
            leaves: {
              o: {
                type: 'node',
                leaves: {
                  [1]: {
                    leaves: {
                      type: 'node',
                      leaves: {
                        [2]: {
                          type: 'target',
                          value: { name: 'foo', date: 12 },
                        },
                      },
                    },
                  },
                },
              },
              [1]: {
                leaves: {
                  type: 'node',
                  leaves: {
                    [2]: {
                      type: 'target',
                      value: { name: 'foo', date: 12 },
                    },
                  },
                },
              },
            },
          },
          [1]: {
            leaves: {
              type: 'node',
              leaves: {
                [2]: {
                  type: 'target',
                  value: { name: 'foo', date: 12 },
                },
              },
            },
          },
        },
        [1]: {
          leaves: {
            type: 'node',
            leaves: {
              [2]: {
                type: 'target',
                value: { name: 'foo', date: 12 },
              },
            },
          },
        },
      },
      b: {
        type: 'node',
        leaves: {
          a: {
            type: 'node',
            leaves: {
              r: {
                type: 'node',
                leaves: {
                  [3]: {
                    type: 'target',
                    value: { name: 'bar', date: 3 },
                  },
                },
              },
              z: {
                type: 'node',
                leaves: {
                  [3]: {
                    type: 'target',
                    value: { name: 'bar', date: 3 },
                  },
                },
              },
              [3]: {
                type: 'target',
                value: { name: 'bar', date: 3 },
              },
            },
          },
          [3]: {
            type: 'target',
            value: { name: 'bar', date: 3 },
          },
        },
        [3]: {
          type: 'target',
          value: { name: 'bar', date: 3 },
        },
      },
    },
  }

  expect(createTrie(data)).toEqual(expectedTree)
})
