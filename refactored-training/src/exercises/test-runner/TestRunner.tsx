import { useState } from 'react';
import { runTests, type ExerciseTest } from './assert';

export function TestRunner({ tests }: { tests: ExerciseTest[] }) {
  const [, setRunId] = useState(0);
  const results = runTests(tests);
  const passed = results.filter((r) => r.pass).length;

  return (
    <div className="test-runner">
      <div className="test-runner-bar">
        <p>
          {passed}/{results.length} passing
        </p>
        <button type="button" onClick={() => setRunId((n) => n + 1)}>
          Run tests
        </button>
      </div>
      <ul className="test-list">
        {results.map((result) => (
          <li key={result.name} className={result.pass ? 'pass' : 'fail'}>
            <strong>{result.pass ? 'pass' : 'fail'}</strong> {result.name}
            {result.error && <code>{result.error}</code>}
          </li>
        ))}
      </ul>
    </div>
  );
}
