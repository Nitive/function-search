import { zip } from './utils/zip'

interface SuggestItem {
  functionName: string
  modificationDate: number
}

let suggestItems: SuggestItem[]

export function refresh(functionNames: string[], modificationDates: number[]): void {
  suggestItems = zip(functionNames, modificationDates).map(([name, date]): SuggestItem => ({
    functionName: name,
    modificationDate: date,
  }))
}

export function guess(start: string): string[] {
  return suggestItems
    .filter(({ functionName }) => functionName.startsWith(start))
    .sort(({ modificationDate: aDate }, { modificationDate: bDate }) => {
      if (aDate === bDate) {
        return 0
      }

      return aDate < bDate ? 1 : -1
    })
    .map(({ functionName }) => functionName)
}
