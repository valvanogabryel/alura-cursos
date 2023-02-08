import styles from './Button.module.scss';

const Button = ({ children }: any) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}

export default Button;