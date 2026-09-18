import { useState } from 'react';
import { UserDashboard } from './exercises/01-user-dashboard/UserDashboard';
import { JsFundamentals } from './exercises/02-js-fundamentals/JsFundamentals';
import { TaskBoard } from './exercises/03-hooks-context/TaskBoard';
import { TypeScriptDrill } from './exercises/04-typescript/TypeScriptDrill';
import { Algorithms } from './exercises/05-algorithms/Algorithms';
import './App.css';

const EXERCISES = [
  { id: '01', label: '01 Review', topic: 'Code review' },
  { id: '02', label: '02 JS', topic: 'Closures & arrays' },
  { id: '03', label: '03 Hooks', topic: 'State & context' },
  { id: '04', label: '04 TS', topic: 'Types & events' },
  { id: '05', label: '05 Algos', topic: 'Live coding' },
] as const;

type ExerciseId = (typeof EXERCISES)[number]['id'];

function App() {
  const [exercise, setExercise] = useState<ExerciseId>('01');

  return (
    <>
      <nav className="app-nav" aria-label="Exercises">
        {EXERCISES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === exercise ? 'active' : undefined}
            onClick={() => setExercise(item.id)}
          >
            {item.label}
            <span>{item.topic}</span>
          </button>
        ))}
      </nav>
      {exercise === '01' && <UserDashboard />}
      {exercise === '02' && <JsFundamentals />}
      {exercise === '03' && <TaskBoard />}
      {exercise === '04' && <TypeScriptDrill />}
      {exercise === '05' && <Algorithms />}
    </>
  );
}

export default App;
