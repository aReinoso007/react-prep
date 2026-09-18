import { assert, assertEqual, type ExerciseTest } from '../test-runner/assert';
import { flattenTree, groupAnagrams, isAnagram, twoSum } from './implementations';

function sortedPairs(groups: string[][]): string[] {
  return groups
    .map((group) => [...group].sort().join(','))
    .sort();
}

export const algorithmTests: ExerciseTest[] = [
  {
    name: 'twoSum finds a unique pair',
    fn() {
      assertEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
      assertEqual(twoSum([3, 2, 4], 6), [1, 2]);
      assertEqual(twoSum([3, 3], 6), [0, 1]);
      assertEqual(twoSum([1, 2, 3], 100), null);
    },
  },
  {
    name: 'isAnagram ignores case and spaces',
    fn() {
      assertEqual(isAnagram('listen', 'silent'), true);
      assertEqual(isAnagram('Dormitory', 'dirty room'), true);
      assertEqual(isAnagram('hello', 'world'), false);
    },
  },
  {
    name: 'flattenTree walks depth-first',
    fn() {
      const tree = [
        { id: 'a', children: [{ id: 'b', children: [{ id: 'c' }] }] },
        { id: 'd' },
      ];
      assertEqual(flattenTree(tree), [
        { id: 'a', depth: 0 },
        { id: 'b', depth: 1 },
        { id: 'c', depth: 2 },
        { id: 'd', depth: 0 },
      ]);
    },
  },
  {
    name: 'groupAnagrams clusters by sorted letters',
    fn() {
      const groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
      assertEqual(groups.length, 3);
      const keys = sortedPairs(groups);
      assert(keys.includes('ate,eat,tea'), 'missing eat group');
      assert(keys.includes('nat,tan'), 'missing tan group');
      assert(keys.includes('bat'), 'missing bat group');
    },
  },
];
