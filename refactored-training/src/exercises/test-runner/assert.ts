export function assertEqual<T>(actual: T, expected: T): void {
  if (!Object.is(actual, expected) && JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export type ExerciseTest = {
  name: string;
  fn: () => void;
};

export type TestResult = {
  name: string;
  pass: boolean;
  error?: string;
};

export function runTests(tests: ExerciseTest[]): TestResult[] {
  return tests.map((test) => {
    try {
      test.fn();
      return { name: test.name, pass: true };
    } catch (error) {
      return {
        name: test.name,
        pass: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  });
}
