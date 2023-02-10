import { useState, useEffect } from 'react';

import { useSelectContext } from '../../common/context/SelectContext';

import Button from '../Button';
import Clock from './Clock';

import convertTimeToSeconds from '../../common/utils/time';

import styles from './Stopwatch.module.scss';

const Stopwatch = () => {
    const { selected } = useSelectContext();
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.studyTime) {
            setTime(convertTimeToSeconds(selected.studyTime))
        }
    }, [selected, setTime])


    return (
        <div className={styles.stopwatch}>
            <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.clockWrapper}>
                <Clock />
            </div>
            <span>Tempo: {time}</span>
            <Button>
                Começar
            </Button>
        </div>
    );
}

export default Stopwatch;