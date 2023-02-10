import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SelectProvider } from './common/context/SelectContext';
import { TaskListProvider } from './common/context/TaskList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskListProvider>
      <SelectProvider>
        <App />
      </SelectProvider>
    </TaskListProvider>
  </React.StrictMode>
);
