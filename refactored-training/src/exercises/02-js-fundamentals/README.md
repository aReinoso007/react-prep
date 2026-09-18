# Exercise 2 — JS fundamentals

Live-coding stand-in for closures, scope, and array methods.

Open `implementations.ts` and make the tests pass. Do not look at a solution
until you have a failing test you can explain.

## Say out loud

- A closure keeps a **live reference** to the outer variable, not a copy.
- Two `createCounter()` calls are two scopes — they do not share `count`.
- `once` is the same idea as a React event handler that should only fire once.
- `map` / `filter` / `reduce` return new data. `push` / `sort` / `splice` mutate.
- `uniqueBy` and `groupBy` should be generic so TypeScript infers `T`.
