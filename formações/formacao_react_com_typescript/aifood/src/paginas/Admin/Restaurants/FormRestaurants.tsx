import {
  TextField,
  Button
} from '@mui/material';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FormRestaurants = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      axios.get(`http://localhost:8000/api/v2/restaurantes/${params.id}/`)
        .then((response) => setRestaurantName(response.data.nome));
    }
  }, [params]);

  const placeholders = [
    'KFC',
    'McDonalds',
    'Bobs',
    'Giraffas',
    'Burguer King',
    'KFC',
    'McDonalds',
    'Bobs',
    'Giraffas',
    'Burguer King'
  ];

  const placeholder = () => {
    const choosedIndex = Math.round(Math.random() * placeholders.length);
    return placeholders[choosedIndex];
  };

  function getRestaurantName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (params.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, {
        nome: restaurantName
      })
        .then(() => {
          alert('Restaurante atualizado com sucesso.');
        });
    } else {
      axios.post('http://localhost:8000/api/v2/restaurantes/', {
        nome: restaurantName
      })
        .then(() => {
          alert('Restaurante adicionado com sucesso.');
        });
    }
  }

  return (
    <form onSubmit={getRestaurantName}>
      <TextField
        value={restaurantName}
        id='outlined-basic'
        label='Nome do restaurante'
        variant='outlined'
        placeholder={placeholder() || 'McDonalds'}
        onChange={event => setRestaurantName(event.target.value)}
      />
      <Button
        variant='outlined'
        type='submit'
        disabled={restaurantName.length < 3}
      >
        Salvar
      </Button>
    </form>
  );
}

export default FormRestaurants;