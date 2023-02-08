import React from 'react';
import Button from '../Button';

const Form = () => {
    return (
        <section>
            <form>
                <div>
                    <label htmlFor="task">Tarefa</label>
                    <input
                        type="text"
                        name='task'
                        id='task'
                        placeholder='O que você irá estudar hoje?'
                        required
                    />
                </div>
                <div>
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
                    Adicionar tarefa
                </Button>
            </form>
        </section>
    );
}

export default Form;