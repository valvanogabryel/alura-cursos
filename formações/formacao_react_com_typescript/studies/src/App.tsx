import { useState } from 'react';

import Form from './components/Form';
import List from './components/List';
import Stopwatch from './components/Stopwatch';

import styles from './App.module.scss';
import ITask from './types/tasks';

function App() {
  const [taskList, setTasks] = useState<ITask[]>([
    // {
    //   taskName: 'React',
    //   studyTime: '01:30:00'
    // },
    // {
    //   taskName: 'TypeScript',
    //   studyTime: '01:12:00'
    // },
    // {
    //   taskName: 'SASS',
    //   studyTime: '00:30:00'
    // },
  ])


  return (
    <main className={styles.AppStyle}>
      <Form
        tasks={taskList}
        setTasks={setTasks}
      />
      <List tasks={taskList} />
      <Stopwatch />
    </main>
  );
}

export default App;
