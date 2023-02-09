import React from 'react';
import Button from '../Button';
import styles from './Form.module.scss';

const Form = () => {
    return (
        <section>
            <form className={styles.newTask}>
                <div className={styles.inputContainer}>
                    <label htmlFor="task">Tarefa</label>
                    <input
                        type="text"
                        name='task'
                        id='task'
                        placeholder='O que você irá estudar hoje?'
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input
                        type="time"
                        name='time'
                        id='time'
                        step='1'
                        min='00:00:00'
                        max='01:30:00'
                        required
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