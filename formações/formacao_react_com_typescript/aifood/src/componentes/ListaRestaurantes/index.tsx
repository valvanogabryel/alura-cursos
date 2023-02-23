import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import IPaginacao from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import { Button, MenuItem, Select, TextField } from '@mui/material';

interface ISearchEngineParams {
  ordering?: string;
  search?: string;
}

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  const [search, setSearch] = useState('');

  const [selected, setSelected] = useState('');

  function getData(url: string, options: AxiosRequestConfig = {}) {
    axios.get<IPaginacao<IRestaurante>>(url, options)
      .then(response => {
        setRestaurants(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
      })
      .catch(err =>
        console.log(err)
      );
  }

  function searchElement() {
    const options = {
      params: {

      } as ISearchEngineParams
    }

    if (search) options.params.search = search;


    if (selected) options.params.ordering = selected;

    getData('http://localhost:8000/api/v1/restaurantes/', options);
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
      <form>
        <TextField
          variant='outlined'
          color='error'
          type="text"
          onChange={event => {
            setSearch(event.target.value);
            searchElement();
          }}
        />
        <Select
          value={selected}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        >
          <MenuItem value="">Nenhuma</MenuItem>
          <MenuItem value="nome">Nome</MenuItem>
          <MenuItem value="id">ID</MenuItem>
        </Select>

        <Button
          size='large'
          variant='contained'
          onClick={() => searchElement()}
        >
          Ordenar
        </Button>
      </form>
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
        }}
          size='small'
          color='primary'
          variant='outlined'
        >
          Página anterior
        </Button>}
    </section >)
}

export default ListaRestaurantes