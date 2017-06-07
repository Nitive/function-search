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
})
