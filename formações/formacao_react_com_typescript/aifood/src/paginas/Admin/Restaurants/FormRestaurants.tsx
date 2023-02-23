import {
  TextField,
  Button,
  Box,
  Typography,
  Container
} from '@mui/material';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import http from '../../../http';

const FormRestaurants = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      http.get(`restaurantes/${params.id}/`)
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
      http.put(`restaurantes/${params.id}/`, {
        nome: restaurantName
      })
        .then(() => {
          alert('Restaurante atualizado com sucesso.');
        });
    } else {
      http.post('restaurantes/', {
        nome: restaurantName
      })
        .then(() => {
          alert('Restaurante adicionado com sucesso.');
        });
    }
  }

  return (
    <>
      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>

          {/* Conteudo da página */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 1
          }}>
            <Typography
              component='h1'
              variant='h6'
            >
              Formulário de Restaurantes
            </Typography>
            <Box
              component='form'
              onSubmit={getRestaurantName}
              sx={{
                my: 1,
                width: '100%'
              }}
            >
              <TextField
                value={restaurantName}
                id='outlined-basic'
                label='Nome do restaurante'
                variant='outlined'
                placeholder={placeholder() || 'McDonalds'}
                onChange={event => setRestaurantName(event.target.value)}
                fullWidth
              />
              <Button
                sx={{
                  marginTop: 1
                }}
                fullWidth
                variant='outlined'
                type='submit'
                disabled={restaurantName.length < 3}
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FormRestaurants;