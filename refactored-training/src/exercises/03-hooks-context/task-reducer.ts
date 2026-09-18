export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type TaskAction =
  | { type: 'add'; title: string }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string };

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add': {
      const title = action.title.trim();
      if (!title) return state;
      return [...state, { id: crypto.randomUUID(), title, done: false }];
    }
    case 'toggle':
      return state.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task,
      );
    case 'remove':
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
}
