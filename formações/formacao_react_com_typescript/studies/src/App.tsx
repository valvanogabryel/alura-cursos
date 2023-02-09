import Form from './components/Form';
import List from './components/List';
import Stopwatch from './components/Stopwatch';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </main>
  );
}

export default App;
