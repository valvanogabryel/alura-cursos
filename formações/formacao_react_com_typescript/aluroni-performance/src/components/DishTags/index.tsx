import styles from './DishTags.module.scss';
import classNames from 'classnames';
import { Dish } from 'types/dish';

const DishTags = (props: Dish) => {
    const {
        category,
        price,
        size,
        serving
    } = props;

    const type = category.label.toLowerCase();

    return (
        <div className={styles.tags}>
            <div className={classNames(
                styles.tags__type,
                styles[`tags__type__${type}`]
            )}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>
                {size}g
            </div>
            <div className={styles.tags__peopleqtd}>
                {`Serve ${serving} ${serving > 1 ? 'pessoas' : 'pessoa'}`}
            </div>
            <div className={styles.tags__value}>
                R${price.toFixed(2)}
            </div>
        </div>
    );
};

export default DishTags;