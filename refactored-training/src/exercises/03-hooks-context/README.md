# Exercise 3 — Hooks, state, context

A small board to rehearse the React fundamentals that Exercise 1 did not isolate.

## What to cover out loud

- `useReducer` vs `useState` when updates have a few named actions.
- Context value is memoized so consumers do not churn for no reason.
- `useTheme` throws outside the provider — that is the custom-hook rule.
- `useRef` holds the input node; focus is a side effect you trigger after add.
- Empty state is conditional rendering, not an empty `<ul>`.
- List keys are `task.id`, never the index.

## Practice

1. Close `theme-context.tsx` and rewrite the provider + hook.
2. Add a fourth action, `clearCompleted`, to the reducer.
3. Explain why `toggleTheme` is recreated when `theme` changes, and how you
   would stabilize it if a memoized child needed it.
