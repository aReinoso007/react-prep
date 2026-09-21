export type TreeNode = {
  id: string;
  children?: TreeNode[];
};

export type FlatNode = {
  id: string;
  depth: number;
};

/** Return the two indices that add up to target, or null. */
export function twoSum(
  _nums: number[],
  _target: number,
): [number, number] | null {
  const map = new Map<Number, number>();
  for (let i = 0; i < _nums.length; i++) {
    const complement = _target - _nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(_nums[i], i);
  }
  return null;
}

/** Case-insensitive. Ignore spaces. */
export function isAnagram(_a: string, _b: string): boolean {
  if (_a.length !== _b.length) return false;
  const charCount: Record<string, number> = {};

  for (const l1 of _a) {
    charCount[l1] = (charCount[l1] ?? 0) + 1;
  }

  for (const l of _b) {
    if (!charCount[l]) return false;
    charCount[l]--;
  }

  return true;
}

/** Depth-first flatten. Root depth is 0. */
export function flattenTree(_nodes: TreeNode[]): FlatNode[] {
  throw new Error("not implemented");
}

/**
 * Group words that are anagrams of each other.
 * Order of groups and words inside a group does not matter.
 */
export function groupAnagrams(_words: string[]): string[][] {
  throw new Error("not implemented");
}

export type NestedNumber = number | NestedNumber[];

/** Ignore case, spaces, and punctuation. "A man, a plan, a canal: Panama" → true. */
export function isPalindrome(_s: string): boolean {
  throw new Error("not implemented");
}

/** Index of the first character that appears once, or -1. */
export function firstUniqueChar(_s: string): number {
  throw new Error("not implemented");
}

/** Length of the longest substring with all unique characters. */
export function lengthOfLongestSubstring(_s: string): number {
  throw new Error("not implemented");
}

/** Best single buy-then-sell profit. No transaction → 0. */
export function maxProfit(_prices: number[]): number {
  throw new Error("not implemented");
}

/** Flatten arbitrarily nested number arrays. */
export function flattenArray(_input: NestedNumber[]): number[] {
  throw new Error("not implemented");
}

/** Merge two already-sorted arrays into one sorted array. */
export function mergeSorted(_a: number[], _b: number[]): number[] {
  throw new Error("not implemented");
}

/** Split into groups of `size`. Last chunk may be shorter. */
export function chunk<T>(_items: T[], _size: number): T[][] {
  throw new Error("not implemented");
}

/** Only (), [], {}. Empty string is valid. */
export function validParentheses(s: string): boolean {
  const openStack: string[] = new Array<string>(s.length);
  //number of items currently on the stack
  let stackTop = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
      openStack[stackTop] = currentChar;
      stackTop++;
      continue;
    }
    let expectedOpen = ''
    if(currentChar === ')'){
      expectedOpen = '('
    } else if (currentChar === ']'){
      expectedOpen = '['
    } else if(currentChar === '}'){
      expectedOpen = '{'
    }else{
      continue
    }
    if(stackTop === 0 || openStack[stackTop-1] !== expectedOpen){
      return false
    }
    stackTop--
  }
  return stackTop === 0
}
