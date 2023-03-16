// react
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// styles
import styles from './Admin.module.scss';
import themeStyles from 'styles/Theme.module.scss';
// libraries
import classNames from 'classnames';

const Admin = () => {
    const { user } = useParams();

    useEffect(() => {
        window.scrollTo(
            100,
            100
        );
    }, [window]);


    return (
        (user === 'gabryel') ?
            <section className={classNames(
                themeStyles.container,
                styles.admin
            )}>
                <div className={styles.admin__greetings}>
                    <h3 className={themeStyles.title}>Olá, {user}</h3>
                </div>
            </section>
            :
            <Navigate to='/' />
    );
};

export default Admin;