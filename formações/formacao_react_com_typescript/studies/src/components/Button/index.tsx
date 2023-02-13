import styles from './Button.module.scss';

interface IButtonProps {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

const Button = ({ children, type = "button", onClick }: IButtonProps) => {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;