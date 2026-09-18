export type TreeNode = {
  id: string;
  children?: TreeNode[];
};

export type FlatNode = {
  id: string;
  depth: number;
};

/** Return the two indices that add up to target, or null. */
export function twoSum(_nums: number[], _target: number): [number, number] | null {
  throw new Error('not implemented');
}

/** Case-insensitive. Ignore spaces. */
export function isAnagram(_a: string, _b: string): boolean {
  throw new Error('not implemented');
}

/** Depth-first flatten. Root depth is 0. */
export function flattenTree(_nodes: TreeNode[]): FlatNode[] {
  throw new Error('not implemented');
}

/**
 * Group words that are anagrams of each other.
 * Order of groups and words inside a group does not matter.
 */
export function groupAnagrams(_words: string[]): string[][] {
  throw new Error('not implemented');
}
