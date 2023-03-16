import DishTags from 'components/DishTags';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/dish';
import styles from './Item.module.scss';


const Item = (props: Dish) => {
    const {
        title,
        description,
        photo,
        id
    } = props;

    const navigate = useNavigate();

    return (
        <div
            className={styles.item}
            onClick={() => {
                window.scrollTo({
                    top: 405
                });

                return navigate(`/prato/${id}`);
            }
            }
        >
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
                <DishTags
                    {...props}
                />
            </div>
        </div >
    );
};

export default Item;