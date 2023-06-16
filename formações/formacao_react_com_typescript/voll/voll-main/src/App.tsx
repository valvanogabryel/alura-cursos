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

        <TableComponent queries={queries} />
        <Diagram queries={queries} professionals={professionals} />
        <Assentment professionals={professionals} />
      </Container>
      <Footer />
    </div>
  );
}
