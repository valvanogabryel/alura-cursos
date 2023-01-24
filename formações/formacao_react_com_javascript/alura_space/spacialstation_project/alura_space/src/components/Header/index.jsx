import logo from './images/logo.png';
import search from './images/search.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo da Alura Space" />
            <div>
                <input type="search" placeholder="O que você procura?" />
                <img src={search} alt="Ícone de pesquisa" />
            </div>
        </header>
    )
}

export default Header;