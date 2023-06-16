import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
} from "@mui/material";
import IQuery from "../../interfaces/IQuery";
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)(() => ({
  cursor: "default",

  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
    align: "right",
  },
}));

export function TableComponent({ queries }: { queries: IQuery[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized-table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell>Horário</StyledTableCell>
              <StyledTableCell>Profissional</StyledTableCell>
              <StyledTableCell>Especialidade</StyledTableCell>
              <StyledTableCell>Paciente</StyledTableCell>
              <StyledTableCell>Modalidade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queries?.map((query) => (
              <StyledTableRow key={query.id}>
                <StyledTableCell component="th" scope="row">
                  {query.data}
                </StyledTableCell>
                <StyledTableCell>{query.horario}</StyledTableCell>
                <StyledTableCell>{query.profissional[0].nome}</StyledTableCell>
                <StyledTableCell>
                  {query.profissional[0].especialidade}
                </StyledTableCell>
                <StyledTableCell>{query.paciente}</StyledTableCell>
                <StyledTableCell>{query.modalidade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
