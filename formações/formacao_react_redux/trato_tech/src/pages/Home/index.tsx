import { Header } from "../../components/Header";
import image from "../../assets/inicial.png";
import "./Home.modules.scss";

export default function Home() {
  return (
    <div>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil!"
        image={image}
        className="header"
      />
    </div>
  );
}
