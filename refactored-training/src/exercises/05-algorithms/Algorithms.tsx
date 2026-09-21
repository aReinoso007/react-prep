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
        <li>
          <code>isPalindrome</code> — two pointers after normalizing
        </li>
        <li>
          <code>validParentheses</code> — stack of open brackets
        </li>
        <li>
          <code>firstUniqueChar</code> — count, then second pass
        </li>
        <li>
          <code>lengthOfLongestSubstring</code> — sliding window + set/map
        </li>
        <li>
          <code>maxProfit</code> — track min price so far
        </li>
        <li>
          <code>flattenArray</code> — recursion or a stack
        </li>
        <li>
          <code>mergeSorted</code> — two pointers, no <code>sort</code>
        </li>
        <li>
          <code>chunk</code> — slice in steps of <code>size</code>
        </li>
      </ol>
      <TestRunner tests={algorithmTests} />
    </section>
  );
}
