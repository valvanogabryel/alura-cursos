import React from 'react'
import styles from './MainButton.module.css';

const MainButton = ({ children, size }) => {
    return (
        <button className=
            {
                `${styles.mainButton} ${styles[size]}`
            }>
            {children}
        </button>
    );
}

export default MainButton;