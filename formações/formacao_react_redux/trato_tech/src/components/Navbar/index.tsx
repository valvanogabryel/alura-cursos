import Logo from "../../assets/logo.svg";
import cn from "classnames";
import { ShoppingCart } from "lucide-react";
import "./Navbar.modules.scss";
import { Search } from "../Search";

const iconProps = {
  size: 24,
  color: "white",
};

export function Navbar() {
  return (
    <nav className="nav">
      <img src={Logo} alt="" className="logo" />
      <ul className="links">
        <li>
          <a
            href="/"
            className={cn("link", {
              ["selected"]: window.location.pathname === "/",
            })}
          >
            Página inicial
          </a>
        </li>
      </ul>
      <div className="busca">
        <Search />
      </div>
      <div className="icones">
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <ShoppingCart className="filled-cart" {...iconProps} />
          ) : (
            <ShoppingCart {...iconProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
