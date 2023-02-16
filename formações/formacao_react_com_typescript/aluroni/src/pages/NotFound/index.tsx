import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';
import themeStyles from 'styles/Theme.module.scss';

import classNames from 'classnames';
import 'animate.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={classNames({
            [styles.container]: true,
            [themeStyles.container]: true,
            ['animate__animated']: true,
            ['animate__fadeInUp']: true
        })}>
            <div className={styles.back}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    );
};

export default NotFound;