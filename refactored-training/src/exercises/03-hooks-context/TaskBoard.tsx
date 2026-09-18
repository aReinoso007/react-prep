import { useReducer, useRef, type FormEvent } from 'react';
import { ThemeProvider, useTheme } from './theme-context';
import { taskReducer } from './task-reducer';

function TaskBoardInner() {
  const { theme, toggleTheme } = useTheme();
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = inputRef.current?.value ?? '';
    dispatch({ type: 'add', title });
    if (inputRef.current) inputRef.current.value = '';
    inputRef.current?.focus();
  }

  const remaining = tasks.filter((task) => !task.done).length;

  return (
    <section className={`exercise task-board theme-${theme}`}>
      <p className="exercise-kicker">Exercise 3 — Hooks, state, lifecycle</p>
      <h1>Task board</h1>
      <p>
        Context + custom hook, <code>useReducer</code>, <code>useRef</code>,
        conditional empty state, keyed list. Read the files, then rebuild{' '}
        <code>theme-context.tsx</code> from memory.
      </p>

      <button type="button" className="ghost" onClick={toggleTheme}>
        Theme: {theme}
      </button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">New task</label>
        <input id="task-title" ref={inputRef} placeholder="Add a task" />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p className="dashboard-status">No tasks yet.</p>
      ) : (
        <>
          <p className="dashboard-status">{remaining} remaining</p>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="user-row">
                <label>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => dispatch({ type: 'toggle', id: task.id })}
                  />
                  <span className={task.done ? 'done' : undefined}>{task.title}</span>
                </label>
                <button
                  type="button"
                  aria-label={`Remove ${task.title}`}
                  onClick={() => dispatch({ type: 'remove', id: task.id })}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export function TaskBoard() {
  return (
    <ThemeProvider>
      <TaskBoardInner />
    </ThemeProvider>
  );
}
