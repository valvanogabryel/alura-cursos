import Button from '../Button';
import Clock from './Clock';
import styles from './Stopwatch.module.scss';

const Stopwatch = () => {
    return (
        <div className={styles.stopwatch}>
            <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Começar
            </Button>
        </div>
    );
}

export default Stopwatch;