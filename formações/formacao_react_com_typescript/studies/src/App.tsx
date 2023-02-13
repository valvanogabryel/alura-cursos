import Form from './components/Form';
import List from './components/List';
import Stopwatch from './components/Stopwatch';

import styles from './App.module.scss';
import { useTaskListContext } from './common/context/TaskList';

function App() {
  const { taskList, setTasks } = useTaskListContext();



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
