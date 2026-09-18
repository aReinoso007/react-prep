import { TestRunner } from '../test-runner/TestRunner';
import { algorithmTests } from './tests';

export function Algorithms() {
  return (
    <section className="exercise">
      <p className="exercise-kicker">Exercise 5 — Live coding</p>
      <h1>Problem-solving</h1>
      <p>
        Implement <code>implementations.ts</code> out loud. Narrate the brute
        force first, then the better structure (map, count, recursion). Time
        yourself: 10 minutes per function.
      </p>
      <ol className="exercise-list">
        <li>
          <code>twoSum</code> — hash map of value → index, one pass
        </li>
        <li>
          <code>isAnagram</code> — normalize, then sort or count letters
        </li>
        <li>
          <code>flattenTree</code> — DFS / recursion, carry <code>depth</code>
        </li>
        <li>
          <code>groupAnagrams</code> — key by sorted word
        </li>
      </ol>
      <TestRunner tests={algorithmTests} />
    </section>
  );
}
