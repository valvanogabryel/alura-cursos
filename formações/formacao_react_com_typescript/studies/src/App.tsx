import React from 'react';
import Form from './components/Form';
import List from './components/List';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.AppStyle}>
      <Form />
      <List />
    </main>
  );
}

export default App;
