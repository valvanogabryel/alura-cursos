import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper,
  Button
} from "@mui/material";

import {
  useEffect,
  useState
} from "react";

import IPrato from "../../../interfaces/IPrato";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import http from "../../../http";

const AdminDishes = () => {
  const [dishes, setDishes] = useState<IPrato[]>([]);

  useEffect(() => {
    http.get<IPrato[]>('pratos/')
      .then(response => {
        setDishes(response.data);
      })
  });

  function deleteDish(dishToDelete: IPrato) {
    http.delete(`pratos/${dishToDelete.id}/`)
      .then(() => {
        const dishesList = dishes.filter(dish => dish.id !== dishToDelete.id);
        setDishes([...dishesList]);
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Descrição
            </TableCell>
            <TableCell>
              Tag
            </TableCell>
            <TableCell>
              Imagem
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell>
              Excluir
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            dishes.map(dish => (
              <TableRow key={dish.id}>
                <TableCell>
                  {dish.nome}
                </TableCell>
                <TableCell>
                  {dish.descricao}
                </TableCell>
                <TableCell>
                  {dish.tag}
                </TableCell>
                <TableCell>
                  <a href={dish.imagem} target='_blank' rel="noreferrer">Ver imagem</a>
                </TableCell>
                <TableCell>
                  [ <Link to={`/admin/pratos/${dish.id}`}>Editar</Link> ]
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteDish(dish)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminDishes;