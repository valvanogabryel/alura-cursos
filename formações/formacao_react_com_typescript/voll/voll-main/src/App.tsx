import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Title } from "./components/Title";

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
      </Container>
      <Footer />
    </div>
  );
}
