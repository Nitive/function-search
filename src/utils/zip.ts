export function zip<T, U>(xs: T[], ys: U[]): Array<[T, U]> {
  if (xs.length !== ys.length) {
    throw new Error('Arrays should have the same length')
  }
  return xs.map((x, index): [T, U] => [x, ys[index]])
}
