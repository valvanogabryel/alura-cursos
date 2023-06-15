import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { Title } from "./components/Title";

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <Title>Área administrativa</Title>

        <TableComponent />
      </Container>
      <Footer />
    </div>
  );
}
