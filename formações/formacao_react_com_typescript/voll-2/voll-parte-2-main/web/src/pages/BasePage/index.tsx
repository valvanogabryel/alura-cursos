import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  );
}
