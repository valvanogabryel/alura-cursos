// React
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import BotaoNavegacao from "../BotaoNavegacao";
import ModalLoginUsuario from "../ModalLoginUsuario";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
// Hooks
import { useLimparToken, useObterToken } from "../../hooks/useSessions";
// Interfaces
import { ICategoria } from "../../interfaces/ICategoria";
// Images
import logo from './assets/logo.png';
import usuario from './assets/usuario.svg';
// Styles
import './BarraNavegacao.css';
import { gql, useQuery } from "@apollo/client";

const OBTER_CATEGORIAS = gql`
  query ObterCategorias {
    categorias {
      id
      slug
      nome
    }
  }
`;

const BarraNavegacao = () => {
  const [modalLoginAberta, setModalLoginAberta] = useState(false);
  const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
  const token = useObterToken();
  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

  // const categorias: ICategoria[] = useCategorias();

  const { data } = useQuery<{ categorias: ICategoria[] }>(OBTER_CATEGORIAS);
  const categorias = data?.categorias;

  const navigate = useNavigate();
  const limparToken = useLimparToken();

  function aoEfetuarLogin() {
    setModalLoginAberta(false);
    setUsuarioLogado(true);
  }

  function efetuarLogout() {
    const usuarioQuerDeslogar = window.confirm('Realmente deseja sair da sua conta?');
    if (usuarioQuerDeslogar) {
      setUsuarioLogado(false);
      limparToken();
      navigate('/');
    }
  }

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            {
              categorias?.map(categoria => (
                <li key={categoria.id}>
                  <Link to={`/categorias/${categoria.slug}`}>
                    {categoria.nome}
                  </Link>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {
          usuarioLogado ?
            <>
              <li>
                <Link to='minha-conta/pedidos'>MINHA CONTA</Link>
              </li>
              <li>
                <BotaoNavegacao
                  texto="Logout"
                  textoAltSrc="Icone representando um usuário"
                  imagemSrc={usuario}
                  onClick={efetuarLogout}
                />
              </li>
            </>
            :
            <>
              <li>
                <BotaoNavegacao
                  texto="Login"
                  textoAltSrc="Icone representando um usuário"
                  imagemSrc={usuario}
                  onClick={(() => setModalLoginAberta(true))}
                />
              </li>
              <li>
                <BotaoNavegacao
                  texto="Cadastrar-se"
                  textoAltSrc="Icone representando um usuário"
                  imagemSrc={usuario}
                  onClick={(() => setModalCadastroAberta(true))}
                />
                <ModalLoginUsuario
                  aberta={modalLoginAberta}
                  aoFechar={() => setModalLoginAberta(false)}
                  aoEfetuarLogin={() => aoEfetuarLogin()}
                />
                <ModalCadastroUsuario
                  aberta={modalCadastroAberta}
                  aoFechar={() => setModalCadastroAberta(false)}
                />
              </li>
            </>
        }
      </ul>
    </nav>
  );
}

export default BarraNavegacao