import { useNavigate } from 'react-router-dom';

import menu from 'data/items.json';

import ourHouseImage from 'assets/nossa_casa.png';

// styles
import styles from './Home.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import { Dish } from 'types/dish';

const Home = () => {
    const recommendedFood = [...menu].sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirectToDetails(dish: Dish) {
        navigate(`/prato/${dish.id}`, { state: { dish } });
    }

    return (
        <section>
            <h3 className={themeStyles.title}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recommended__container}>
                {recommendedFood.map(item => (
                    <div
                        className={styles.recommended}
                        key={item.id}
                    >
                        <div className={styles.recommended__image}>
                            <img
                                src={item.photo}
                                alt={item.title}
                            />
                        </div>
                        <button
                            className={styles.recommended__button}
                            onClick={() => redirectToDetails(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={themeStyles.title}>Nossa casa</h3>
            <div className={styles.ourHouse}>
                <img src={ourHouseImage} alt="Casa do aluroni" />
                <div className={styles.ourHouse__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
};

export default Home;