# Exercise 5 — Algorithms

Frontend interviews rarely want a red-black tree. They want you to talk while
you use a map, a count, or a recursive walk.

## Order

1. Restate the problem and an example.
2. Brute force + complexity.
3. Better approach + complexity.
4. Code.
5. Edge cases: empty input, duplicates, no match.

## Targets

| Function | Brute | Better |
|---|---|---|
| `twoSum` | nested loops O(n²) | map of seen values O(n) |
| `isAnagram` | generate permutations | sort O(n log n) or count O(n) |
| `flattenTree` | — | DFS O(n) |
| `groupAnagrams` | compare every pair | sort-key map O(n k log k) |
