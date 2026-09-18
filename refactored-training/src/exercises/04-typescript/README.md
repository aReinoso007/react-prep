# Exercise 4 — TypeScript + React

Practice the types you will be asked to write without a docs tab.

## Implement

In `implementations.ts`:

- `getReadyData` — use a type guard / narrowing (`if (result.status === 'ready')`).
- `mapResult` — generic `T` → `U`. loading and error pass through.
- `parseUserDraft` — return a discriminated `LoadResult`.

## Say out loud

- Interfaces vs type aliases: both fine here; unions need `type`.
- Inference: `mapResult({ status: 'ready', data: 3 }, (n) => n * 2)` — `n` is `number`.
- React: `ChangeEvent<HTMLInputElement>`, `FormEvent<HTMLFormElement>`.
- Next.js (talk only): `page.tsx` props, `PageProps`, typed `searchParams`,
  and `getStaticProps` / `getServerSideProps` return types if they still use
  the pages router.
