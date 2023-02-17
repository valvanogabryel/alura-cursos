import { useParams } from 'react-router-dom';

import styles from './Admin.module.scss';

const Admin = () => {
    const { user } = useParams();


    return (
        user === 'gabryel' ?
            <div>
                {`Olá, ${user}`}
            </div>
            : ''
    );
};

export default Admin;