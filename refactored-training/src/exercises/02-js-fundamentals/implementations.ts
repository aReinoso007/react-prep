export interface Counter {
  inc: () => number;
  dec: () => number;
  get: () => number;
}

/** Closure: private `count` that only these methods can touch. */
export function createCounter(_start = 0): Counter {
  throw new Error('not implemented');
}

/** Closure: run `fn` once, then return the first result forever. */
export function once<A extends unknown[], R>(
  _fn: (...args: A) => R,
): (...args: A) => R {
  throw new Error('not implemented');
}

/** First item for each key wins. Use map/filter — do not mutate `items`. */
export function uniqueBy<T>(_items: T[], _key: (item: T) => string): T[] {
  throw new Error('not implemented');
}

/** Group items by key. Do not mutate `items`. */
export function groupBy<T>(
  _items: T[],
  _key: (item: T) => string,
): Record<string, T[]> {
  throw new Error('not implemented');
}
