import { assert, assertEqual } from '../test-runner/assert';
import { createCounter, groupBy, once, uniqueBy } from './implementations';
import type { ExerciseTest } from '../test-runner/assert';

export const jsTests: ExerciseTest[] = [
  {
    name: 'createCounter closes over a private count',
    fn() {
      const a = createCounter(10);
      const b = createCounter(0);
      assertEqual(a.inc(), 11);
      assertEqual(a.inc(), 12);
      assertEqual(a.dec(), 11);
      assertEqual(a.get(), 11);
      assertEqual(b.get(), 0);
      assert(
        !Object.hasOwn(a, 'count') && !('count' in a),
        'count should not be a public property',
      );
    },
  },
  {
    name: 'once only runs the function the first time',
    fn() {
      let calls = 0;
      const fn = once((n: number) => {
        calls += 1;
        return n * 2;
      });
      assertEqual(fn(3), 6);
      assertEqual(fn(99), 6);
      assertEqual(calls, 1);
    },
  },
  {
    name: 'uniqueBy keeps the first item per key',
    fn() {
      const items = [
        { id: '1', name: 'Ada' },
        { id: '1', name: 'Duplicate' },
        { id: '2', name: 'Grace' },
      ];
      const result = uniqueBy(items, (item) => item.id);
      assertEqual(result.length, 2);
      assertEqual(result[0]?.name, 'Ada');
      assertEqual(result[1]?.name, 'Grace');
      assertEqual(items.length, 3);
    },
  },
  {
    name: 'groupBy buckets without mutating the source',
    fn() {
      const words = ['a', 'bb', 'cc', 'ddd'];
      const result = groupBy(words, (word) => String(word.length));
      assertEqual(result['1']?.length, 1);
      assertEqual(result['2']?.length, 2);
      assertEqual(result['3']?.length, 1);
      assertEqual(words.length, 4);
    },
  },
];
