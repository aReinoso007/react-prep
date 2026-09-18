import { assertEqual, type ExerciseTest } from '../test-runner/assert';
import { getReadyData, mapResult, parseUserDraft } from './implementations';

export const tsTests: ExerciseTest[] = [
  {
    name: 'getReadyData narrows to data or undefined',
    fn() {
      assertEqual(getReadyData({ status: 'loading' }), undefined);
      assertEqual(getReadyData({ status: 'error', message: 'nope' }), undefined);
      assertEqual(getReadyData({ status: 'ready', data: 42 }), 42);
    },
  },
  {
    name: 'mapResult only transforms ready data',
    fn() {
      assertEqual(mapResult({ status: 'loading' }, (n: number) => n * 2), {
        status: 'loading',
      });
      assertEqual(
        mapResult({ status: 'ready', data: 3 }, (n) => n * 2),
        { status: 'ready', data: 6 },
      );
    },
  },
  {
    name: 'parseUserDraft validates name and email',
    fn() {
      assertEqual(parseUserDraft({ name: '', email: 'a@b.com' }).status, 'error');
      assertEqual(parseUserDraft({ name: 'Ada', email: 'ada' }).status, 'error');
      assertEqual(parseUserDraft({ name: 'Ada', email: 'ada@b.com' }), {
        status: 'ready',
        data: { name: 'Ada', email: 'ada@b.com' },
      });
    },
  },
];
