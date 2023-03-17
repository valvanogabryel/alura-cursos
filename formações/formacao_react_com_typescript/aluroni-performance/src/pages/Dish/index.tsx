// react
import { lazy } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
// components
// data
import menu from 'data/items.json';
// styles
import styles from './Dish.module.scss';

const DishTags = lazy(() => import('components/DishTags'));
const NotFound = lazy(() => import('pages/NotFound'));
const Banner = lazy(() => import('components/Banner'));

const Dish = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menu.find(item => item.id === Number(id));
  if (!dish) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route
        path='*'
        element={<Banner />}
      >
        <Route
          index
          element={
            <>
              <button
                className={styles.back}
                onClick={() => navigate(-1)}
              >
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dish.title}</h1>
                <div className={styles.image}>
                  <img
                    src={dish.photo}
                    alt={dish.title}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.content__description}>
                    {dish.description}
                  </p>
                </div>
                <DishTags
                  {...dish}
                />
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default Dish;