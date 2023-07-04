import { useState } from "react";
import Container from "../../components/Container";
import Avaliacao from "../../components/Avaliacao";
import Botao from "../../components/Botao";
import Grafico from "../../components/Grafico";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import Titulo from "../../components/Titulo";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";
import { ModalSignUp } from "./Modal";

export default function Dashboard() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional();

  const [open, setOpen] = useState(false);

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição");
  }

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  return (
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <ModalSignUp open={open} handleClose={handleModalClose} />
      <Botao onClick={handleModalOpen}>Cadastrar especialista</Botao>
      <Titulo imagem="consulta">Consultas do Dia</Titulo>
      <Tabela consultas={consultas} />
      <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Grafico consultas={consultas} profissionais={profissionais} />
      <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
      <Avaliacao profissionais={profissionais} />
    </Container>
  );
}
