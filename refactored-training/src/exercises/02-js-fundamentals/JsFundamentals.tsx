import { TestRunner } from '../test-runner/TestRunner';
import { jsTests } from './tests';

export function JsFundamentals() {
  return (
    <section className="exercise">
      <p className="exercise-kicker">Exercise 2 — JS fundamentals</p>
      <h1>Closures, scope, array methods</h1>
      <p>
        Implement the functions in <code>implementations.ts</code>. Talk while you
        type: what is captured, is it a copy or a live reference, and does the
        array helper mutate.
      </p>
      <ol className="exercise-list">
        <li>
          <code>createCounter</code> — private count, <code>inc</code> /{' '}
          <code>dec</code> / <code>get</code>
        </li>
        <li>
          <code>once</code> — first return value wins, later calls skip the fn
        </li>
        <li>
          <code>uniqueBy</code> — first item per key, do not mutate the input
        </li>
        <li>
          <code>groupBy</code> — <code>Record&lt;string, T[]&gt;</code>, no mutate
        </li>
      </ol>
      <TestRunner tests={jsTests} />
    </section>
  );
}
