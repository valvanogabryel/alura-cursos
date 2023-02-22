import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper
} from "@mui/material";

import {
  useEffect,
  useState
} from "react";

import IRestaurante from "../../../interfaces/IRestaurante";
import axios from 'axios';
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

const AdminRestaurants = () => {
  const [restaurants, setRestaurants] = useState<IRestaurante[]>([]);

  useEffect(() => {
    axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
      .then(response => {
        setRestaurants(response.data);
      })
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            restaurants.map(restaurant => (
              <TableRow key={restaurant.id}>
                <TableCell>
                  {restaurant.nome}
                </TableCell>
                <TableCell>
                  [ <Link to={`/admin/restaurantes/${restaurant.id}`}>Editar</Link> ]
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminRestaurants;