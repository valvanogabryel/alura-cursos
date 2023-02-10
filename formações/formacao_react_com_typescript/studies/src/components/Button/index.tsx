import styles from './Button.module.scss';

interface IButtonProps {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({ children, type = "button" }: IButtonProps) => {
    return (
        <button
            className={styles.button}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;