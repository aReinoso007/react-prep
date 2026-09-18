# Exercise 1 — User Dashboard: Code Review

A teammate opened a PR for a small widget: search users, toggle favorites, see how
long you've been online. It "works." Review it the way you'd be asked to in the
interview's code-review segment.

## Task

1. Run the app (`npm run dev`) and actually **use** it — type in the search box,
   click the favorite stars, open the browser console, let it sit open for a bit.
   Some issues only show up when you interact with it, not just by reading the code.
2. Find the issues. They span correctness, React rendering/performance, and
   TypeScript safety.
3. Fix them in place in `UserDashboard.tsx` and `UserRow.tsx`.
4. For each thing you change, be ready to say out loud *why* it was a problem and
   what breaks in production if it ships as-is — that's what's actually being
   graded in the real interview.

Tell me when you think you've got them all (or want a hint) and I'll review your
diff like an interviewer would.
