import { useParams } from 'react-router-dom';

import styles from './Dish.module.scss';

const Dish = () => {
    const params = useParams();
    console.log(params);

    return (
        <section>
            Prato
        </section>
    );
};

export default Dish;