import styles from './Clock.module.scss';

const Clock = () => {
    return (
        <>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockDivision}>:</span>
            <span className={styles.clockNumber}>0</span>
            <span className={styles.clockNumber}>0</span>
        </>
    );
}

export default Clock;