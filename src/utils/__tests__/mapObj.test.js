// @flow

const { mapObj } = require('../mapObj')

describe('utils/mapObj', () => {
  it('should works with empty objects', () => {
    expect(mapObj(x => x + 1, {})).toEqual({})
  })

  it('should work', () => {
    expect(mapObj(x => x + 1, { a: 1 })).toEqual({ a: 2 })
  })
})
