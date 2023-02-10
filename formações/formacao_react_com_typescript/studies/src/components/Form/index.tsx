import React, { useState } from 'react';

import Button from '../Button';

import { v4 as uuidv4 } from 'uuid';

import ITask from '../../types/tasks';
import styles from './Form.module.scss';

interface IFormProps {
    tasks: Array<
        ITask
    >

    setTasks: React.Dispatch<React.SetStateAction<Array<{
        taskName: string;
        studyTime: string;
    }>>>
}

const Form = ({ tasks, setTasks }: IFormProps) => {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setTasks(previousTasks => [...previousTasks, {
            taskName: task,
            studyTime: time,
            isSelected: false,
            isCompleted: false,
            id: uuidv4()
        }]);

        cleanInputs();
    }

    const cleanInputs = () => {
        setTask('');
        setTime('00:00');
    }

    return (
        <section>
            <form
                className={styles.newTask}
                onSubmit={addTask}
            >
                <div className={styles.inputContainer}>
                    <label htmlFor="task">Tarefa</label>
                    <input
                        type="text"
                        name='task'
                        id='task'
                        placeholder='O que você irá estudar hoje?'
                        value={task}
                        required
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input
                        type="time"
                        name='time'
                        id='time'
                        value={time}
                        step='1'
                        min='00:00:00'
                        max='01:30:00'
                        required
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        </section>
    );
}

export default Form;