import axios from 'axios';
import { useEffect, useState } from 'react';
import IPaginacao from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import { Button } from '@mui/material';

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  function getData(url: string) {
    axios.get<IPaginacao<IRestaurante>>(url)
      .then(response => {
        setRestaurants(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      })
      .catch(err =>
        console.log(err)
      );
  }

  useEffect(() => {
    // Get API data
    getData('http://localhost:8000/api/v1/restaurantes/');
  }, []);

  function scrollPageToTop() {
    window.scrollTo({
      top: 0
    });
  }

  return (
    <section className={style.ListaRestaurantes}>
      <h1>Os restaurantes mais <em>bacanas</em>!</h1>
      {restaurants?.map(item =>
        <Restaurante
          restaurante={item}
          key={item.id}
        />)}

      {nextPage &&
        <Button
          onClick={() => {
            scrollPageToTop();
            return getData(nextPage);
          }
          }
          size='small'
          color='secondary'
          variant='outlined'
        >
          Próxima página
        </Button>}

      {previousPage &&
        <Button onClick={() => {
          scrollPageToTop();
          return getData(previousPage);
        }
        }
          size='small'
          color='primary'
          variant='outlined'
        >
          Página anterior
        </Button>}
    </section >)
}

export default ListaRestaurantes