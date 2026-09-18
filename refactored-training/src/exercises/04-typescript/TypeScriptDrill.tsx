import { useState, type ChangeEvent, type FormEvent } from 'react';
import { TestRunner } from '../test-runner/TestRunner';
import { parseUserDraft, type UserDraft } from './implementations';
import { tsTests } from './tests';

export function TypeScriptDrill() {
  const [draft, setDraft] = useState<UserDraft>({ name: '', email: '' });
  const [message, setMessage] = useState('Submit to run parseUserDraft');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name !== 'name' && name !== 'email') return;
    setDraft((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = parseUserDraft(draft);
    if (result.status === 'ready') {
      setMessage(`Ready: ${result.data.name} <${result.data.email}>`);
      return;
    }
    if (result.status === 'error') {
      setMessage(result.message);
      return;
    }
    setMessage('Loading');
  }

  return (
    <section className="exercise">
      <p className="exercise-kicker">Exercise 4 — TypeScript</p>
      <h1>Unions, generics, React events</h1>
      <p>
        Fill in <code>implementations.ts</code>. The form is already typed —
        read <code>ChangeEvent</code> and <code>FormEvent</code>, then explain
        how the same <code>LoadResult&lt;T&gt;</code> idea showed up in Exercise 1.
      </p>
      <form className="typed-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={draft.name} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={draft.email}
          onChange={handleChange}
        />
        <button type="submit">Validate</button>
      </form>
      <p className="dashboard-status">{message}</p>
      <TestRunner tests={tsTests} />
    </section>
  );
}
