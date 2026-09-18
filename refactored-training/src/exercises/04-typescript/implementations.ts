export type LoadResult<T> =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; data: T };

/** Return `data` only when status is ready. TypeScript should narrow. */
export function getReadyData<T>(_result: LoadResult<T>): T | undefined {
  throw new Error('not implemented');
}

/** Map ready data. loading/error stay the same shape. */
export function mapResult<T, U>(
  _result: LoadResult<T>,
  _fn: (data: T) => U,
): LoadResult<U> {
  throw new Error('not implemented');
}

export type UserDraft = {
  name: string;
  email: string;
};

/** Empty name or missing `@` in email → error result. */
export function parseUserDraft(_draft: UserDraft): LoadResult<UserDraft> {
  throw new Error('not implemented');
}
