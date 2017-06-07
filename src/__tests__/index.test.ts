import { refresh, guess } from '../'

describe('refresh & guess', () => {
  it('should works with empty arrays', () => {
    refresh([], [])
    expect(guess('something')).toEqual([])
  })

  it('should works with one elements arrays', () => {
    refresh(['test'], [1])
    expect(guess('te')).toEqual(['test'])
  })

  it('should sort functions by modification date', () => {
    refresh(['test', 'test2'], [5, 10])
    expect(guess('te')).toEqual(['test2', 'test'])
  })

  it('should give maximum 12 suggests', () => {
    refresh(
      ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am'],
      [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    )
    expect(guess('a')).toEqual(['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al'])
  })
})
