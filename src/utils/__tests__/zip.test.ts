import { zip } from '../zip'

describe('utils/zip', () => {
  it('should works with empty arrays', () => {
    expect(zip([], [])).toEqual([])
  })

  it('should zip arrays with the same length', () => {
    expect(zip([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]])
  })

  it('should throw if arrays has different length', () => {
    expect(() => zip([1], [3, 4])).toThrow()
  })
})
