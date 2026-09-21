import { assert, assertEqual, type ExerciseTest } from '../test-runner/assert';
import {
  chunk,
  firstUniqueChar,
  flattenArray,
  flattenTree,
  groupAnagrams,
  isAnagram,
  isPalindrome,
  lengthOfLongestSubstring,
  maxProfit,
  mergeSorted,
  twoSum,
  validParentheses,
} from './implementations';

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
  {
    name: 'isPalindrome ignores case and punctuation',
    fn() {
      assertEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
      assertEqual(isPalindrome('race a car'), false);
      assertEqual(isPalindrome(' '), true);
    },
  },
  {
    name: 'validParentheses matches brackets in order',
    fn() {
      assertEqual(validParentheses('()[]{}'), true);
      assertEqual(validParentheses('([)]'), false);
      assertEqual(validParentheses('{[]}'), true);
      assertEqual(validParentheses(''), true);
    },
  },
  {
    name: 'firstUniqueChar returns the first singleton index',
    fn() {
      assertEqual(firstUniqueChar('leetcode'), 0);
      assertEqual(firstUniqueChar('loveleetcode'), 2);
      assertEqual(firstUniqueChar('aabb'), -1);
    },
  },
  {
    name: 'lengthOfLongestSubstring uses a sliding window',
    fn() {
      assertEqual(lengthOfLongestSubstring('abcabcbb'), 3);
      assertEqual(lengthOfLongestSubstring('bbbbb'), 1);
      assertEqual(lengthOfLongestSubstring('pwwkew'), 3);
      assertEqual(lengthOfLongestSubstring(''), 0);
    },
  },
  {
    name: 'maxProfit is a single buy then sell',
    fn() {
      assertEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
      assertEqual(maxProfit([7, 6, 4, 3, 1]), 0);
      assertEqual(maxProfit([2, 4, 1]), 2);
    },
  },
  {
    name: 'flattenArray walks nested number arrays',
    fn() {
      assertEqual(flattenArray([1, [2, [3, 4], 5], 6]), [1, 2, 3, 4, 5, 6]);
      assertEqual(flattenArray([]), []);
    },
  },
  {
    name: 'mergeSorted keeps both arrays sorted',
    fn() {
      assertEqual(mergeSorted([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assertEqual(mergeSorted([], [1, 2]), [1, 2]);
      assertEqual(mergeSorted([1], []), [1]);
    },
  },
  {
    name: 'chunk splits without dropping leftovers',
    fn() {
      assertEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
      assertEqual(chunk(['a', 'b'], 5), [['a', 'b']]);
    },
  },
];
