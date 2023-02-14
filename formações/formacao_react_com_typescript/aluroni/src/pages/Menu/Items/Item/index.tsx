import styles from './Item.module.scss';
import menu from '../items.json';
import classNames from 'classnames';

type IItems = typeof menu[0];


const Item = (props: IItems) => {
    const {
        title,
        description,
        photo,
        size,
        category,
        serving,
        price } = props;

    const type = category.label.toLowerCase();

    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img
                    src={photo}
                    alt={`Imagem de ${title}`}
                />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames(
                        styles.item__type,
                        styles[`item__type__${type}`]
                    )}>
                        {category.label}
                    </div>
                    <div className={styles.item__portion}>
                        {size}g
                    </div>
                    <div className={styles.item__peopleqtd}>
                        {`Serve ${serving} ${serving > 1 ? 'pessoas' : 'pessoa'}`}
                    </div>
                    <div className={styles.item__value}>
                        R${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Item;