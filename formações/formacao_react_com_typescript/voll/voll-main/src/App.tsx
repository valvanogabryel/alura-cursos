import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { Title } from "./components/Title";
import useQueryData from "./hooks/useQueryData";

export default function App() {
  const { data, error } = useQueryData();

  return (
    <div>
      <Header />
      <Container>
        <Title>Área administrativa</Title>

        <TableComponent queries={data} />
      </Container>
      <Footer />
    </div>
  );
}
