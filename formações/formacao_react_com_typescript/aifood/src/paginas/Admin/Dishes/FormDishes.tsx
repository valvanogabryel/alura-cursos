import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

import { useState, useEffect } from 'react';
import http from '../../../http';
import IRestaurante from '../../../interfaces/IRestaurante';
import ITag from '../../../interfaces/ITag';

const FormDishes = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const [tags, setTags] = useState<ITag[]>([]);
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http.get<{ tags: ITag[] }>('tags/')
      .then(response => setTags(response.data.tags));

    http.get<IRestaurante[]>('restaurantes/')
      .then(response => setRestaurants(response.data));
  }, []);

  const placeholders = [
    'Macarrão',
    'Bife à milanesa',
    'Batata frita',
    'Pizza de calabresa',
    'Pizza de chocolate',
    'Frango frito',
    'Lasanha à bolonhesa',
    'Bife à cavalo',
    'Filé de peito',
    'Filé de peixe'
  ];

  const placeholder = () => {
    const choosedIndex = Math.round(Math.random() * placeholders.length);
    return placeholders[choosedIndex];
  };

  function getDishName(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    http.post('pratos/', {

    })
      .then(() => {
        alert('Prato adicionado com sucesso!');
      })
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
              Formulário de Dishes
            </Typography>
            <Box
              component='form'
              onSubmit={getDishName}
              sx={{
                my: 1,
                width: '100%'
              }}
            >
              <TextField
                value={dishName}
                id='outlined-basic'
                label='Nome do prato'
                variant='outlined'
                placeholder={placeholder()}
                onChange={event => setDishName(event.target.value)}
                fullWidth
                margin='dense'
              />
              <TextField
                value={description}
                id='outlined-basic'
                label='Descrição do prato'
                variant='outlined'
                placeholder='É um bom prato! :)'
                onChange={event => setDescription(event.target.value)}
                fullWidth
                margin='dense'
              />
              <FormControl
                margin='dense'
                fullWidth
              >
                <InputLabel id='select-tag'>Tag</InputLabel>
                <Select
                  labelId='select-tag'
                  value={tag}
                  onChange={event => setTag(event.target.value)}
                  variant='standard'
                >
                  {tags.map(tag => (
                    <MenuItem
                      key={tag.id}
                      value={tag.id}
                    >
                      {tag.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                margin='dense'
                fullWidth
              >
                <InputLabel id='select-tag'>Restaurante</InputLabel>
                <Select
                  labelId='select-tag'
                  value={restaurant}
                  onChange={event => setRestaurant(event.target.value)}
                  variant='standard'
                >
                  {restaurants.map(restaurant => (
                    <MenuItem
                      key={restaurant.id}
                      value={restaurant.id}
                    >
                      {restaurant.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>


              <Button
                sx={{
                  marginTop: 1
                }}
                fullWidth
                variant='outlined'
                type='submit'
                disabled={dishName.length < 3 || description.length < 5}
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

export default FormDishes;