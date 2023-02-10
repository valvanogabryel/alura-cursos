import React, { useState } from 'react';
import Button from '../Button';
import styles from './Form.module.scss';

const Form = () => {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');

    return (
        <section>
            <form className={styles.newTask}>
                <div className={styles.inputContainer}>
                    <label htmlFor="task">Tarefa</label>
                    <input
                        type="text"
                        name='task'
                        id='task'
                        value={task}
                        placeholder='O que você irá estudar hoje?'
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
                <Button>
                    Adicionar
                </Button>
            </form>
        </section>
    );
}

export default Form;