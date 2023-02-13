import { useState, useEffect } from 'react';

import { useSelectContext } from '../../common/context/SelectContext';

import Button from '../Button';
import Clock from './Clock';

import convertTimeToSeconds from '../../common/utils/time';

import styles from './Stopwatch.module.scss';

const Stopwatch = () => {
    const { selected, concludeTask } = useSelectContext();
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.studyTime) {
            setTime(convertTimeToSeconds(selected.studyTime))
        }
    }, [selected, setTime])

    function descreaseCounter(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                descreaseCounter(counter - 1);
            }
        }, 1000)
        if (counter === 0) {
            concludeTask();
            alert(`Tarefa ${selected.taskName} concluída`);
        }
    }

    return (
        <div className={styles.stopwatch}>
            <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => descreaseCounter(time)}>
                Começar
            </Button>
        </div>
    );
}

export default Stopwatch;