// @flow

const { createTrie, mapTrie } = require('../trie')
/*::
import type { Trie } from '../trie'
*/

describe('trie', () => {
  it('createTrie should work', () => {
    const data = [{ name: 'foo', date: 12 }, { name: 'bar', date: 3 }, { name: 'baz', date: 3 }]
    const expectedTrie /*: Trie */ = {
      leaves: {
        f: {
          leaves: {
            o: {
              leaves: {
                o: {
                  leaves: {
                    [1]: {
                      leaves: {
                        leaves: {
                          [2]: {
                            value: { name: 'foo', date: 12 },
                          },
                        },
                      },
                    },
                  },
                },
                [1]: {
                  leaves: {
                    leaves: {
                      [2]: {
                        value: { name: 'foo', date: 12 },
                      },
                    },
                  },
                },
              },
            },
            [1]: {
              leaves: {
                leaves: {
                  [2]: {
                    value: { name: 'foo', date: 12 },
                  },
                },
              },
            },
          },
          [1]: {
            leaves: {
              leaves: {
                [2]: {
                  value: { name: 'foo', date: 12 },
                },
              },
            },
          },
        },
        b: {
          leaves: {
            a: {
              leaves: {
                r: {
                  leaves: {
                    [3]: {
                      value: { name: 'bar', date: 3 },
                    },
                  },
                },
                z: {
                  leaves: {
                    [3]: {
                      value: { name: 'bar', date: 3 },
                    },
                  },
                },
                [3]: {
                  value: { name: 'bar', date: 3 },
                },
              },
            },
            [3]: {
              value: { name: 'bar', date: 3 },
            },
          },
          [3]: {
            value: { name: 'bar', date: 3 },
          },
        },
      },
    }

    expect(createTrie(data)).toEqual(expectedTrie)
  })

  it('mapTrie should work', () => {
    const trie /*: Trie */ = {
      leaves: {
        b: { value: { name: 'b', date: 3 } },
        f: {
          value: { name: 'f', date: 4 },
          leaves: {
            o: {
              leaves: {
                o: {
                  leaves: {
                    [1]: {
                      leaves: {
                        [2]: {
                          value: { name: 'foo', date: 12 },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }


    const expectedTree /*: Trie */ = {
      leaves: {
        b: { value: { name: 'b', date: 4 } },
        f: {
          value: { name: 'f', date: 5 },
          leaves: {
            o: {
              leaves: {
                o: {
                  leaves: {
                    [1]: {
                      leaves: {
                        [2]: {
                          value: { name: 'foo', date: 13 },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }

    expect(mapTrie(x => ({ name: x.name, date: x.date + 1 }), trie)).toEqual(expectedTree)
  })
})
