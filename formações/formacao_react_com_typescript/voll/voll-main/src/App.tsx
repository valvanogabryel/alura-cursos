import { error } from "console";
import { Container } from "./components/Container";
import { Diagram } from "./components/Diagram";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { Title } from "./components/Title";

import useProfessionalsData from "./hooks/useProfessionalsData";
import useQueryData from "./hooks/useQueryData";
import { Assentment } from "./components/Assessment";
import Button from "./components/Button";
import Subtitle from "./components/Subtitle";

export default function App() {
  const { data: queries, error: queriesError } = useQueryData();
  const { data: professionals, error: professionalsError } =
    useProfessionalsData();

  if (queriesError || professionalsError) {
    console.log("Ocorreu um erro na requisição");
  }

  return (
    <div>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
        <Button>Cadastrar especialista</Button>

        <Title img="query">Consultas do dia</Title>
        <TableComponent queries={queries} />
        <Title img="diagram">Consultas mensais por especialista</Title>
        <Subtitle>Dezembro/22</Subtitle>
        <Diagram queries={queries} professionals={professionals} />
        <Title img="rating">Avaliações de especialistas</Title>
        <Assentment professionals={professionals} />
      </Container>
      <Footer />
    </div>
  );
}
