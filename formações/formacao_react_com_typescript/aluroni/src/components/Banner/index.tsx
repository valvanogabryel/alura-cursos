import styles from './Banner.module.scss';
import { Outlet } from 'react-router-dom';

import themeStyles from 'styles/Theme.module.scss';

const Banner = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa!
                </div>
            </header>
            <div className={themeStyles.container}>
                <Outlet />
            </div>
        </>
    );
};

export default Banner;  