import { refresh, guess } from '../'

test('should return empty array if no data', () => {
  refresh([], [])
  expect(guess('something')).toEqual([])
})
