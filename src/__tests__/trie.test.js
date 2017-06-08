// @flow

const { createTrie, mapTrie, insertValue } = require('../trie')
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
                            values: [{ name: 'foo', date: 12 }],
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
                        values: [{ name: 'foo', date: 12 }],
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
                    values: [{ name: 'foo', date: 12 }],
                  },
                },
              },
            },
          },
          [1]: {
            leaves: {
              leaves: {
                [2]: {
                  values: [{ name: 'foo', date: 12 }],
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
                      values: [{ name: 'bar', date: 3 }],
                    },
                  },
                },
                z: {
                  leaves: {
                    [3]: {
                      values: [{ name: 'bar', date: 3 }],
                    },
                  },
                },
                [3]: {
                  values: [{ name: 'bar', date: 3 }],
                },
              },
            },
            [3]: {
              values: [{ name: 'bar', date: 3 }],
            },
          },
          [3]: {
            values: [{ name: 'bar', date: 3 }],
          },
        },
      },
    }

    expect(createTrie(data)).toEqual(expectedTrie)
  })

  it('mapTrie should work', () => {
    const trie /*: Trie */ = {
      leaves: {
        b: { values: [{ name: 'b', date: 3 }] },
        f: {
          values: [{ name: 'f', date: 4 }],
          leaves: {
            o: {
              leaves: {
                o: {
                  leaves: {
                    [1]: {
                      leaves: {
                        [2]: {
                          values: [{ name: 'foo', date: 12 }],
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
        b: { values: [{ name: 'b', date: 4 }] },
        f: {
          values: [{ name: 'f', date: 5 }],
          leaves: {
            o: {
              leaves: {
                o: {
                  leaves: {
                    [1]: {
                      leaves: {
                        [2]: {
                          values: [{ name: 'foo', date: 13 }],
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

  it.only('insertValue should work', () => {
    const trie /*: Trie */ = {
      leaves: {
        f: {
          leaves: {
            o: {
              leaves: {
                [1]: {
                  values: [{ name: 'fo', date: 1 }],
                },
              },
            },
            [1]: {
              values: [{ name: 'fo', date: 1 }],
            },
            [4]: {
              values: [{ name: 'f', date: 4 }],
            },
          },
        },
      },
    }

    const value = { name: 'fa', date: 1 }

    const expectedTree /*: Trie */ = {
      leaves: {
        f: {
          leaves: {
            o: {
              leaves: {
                [1]: {
                  values: [{ name: 'fo', date: 1 }],
                },
              },
            },
            a: {
              leaves: {
                [1]: {
                  values: [value],
                },
              },
            },
            [1]: {
              values: [value, { name: 'fo', date: 1 }],
            },
            [4]: {
              values: [{ name: 'f', date: 4 }],
            },
          },
        },
      },
    }

    expect(insertValue(value, trie)).toEqual(expectedTree)
  })
})
