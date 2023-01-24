import { Fragment } from "react";
import Header from "../../components/Header";
import { Menu } from "../../components/Menu";
import banner from './images/banner.png';

export default function Homepage() {
    return (
        <Fragment>
            <Header />
            <main>
                <section>
                    <Menu />
                    <div>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img src={banner} alt="Imagem da terra vista do espaço." />
                    </div>
                </section>
            </main>
        </Fragment>
    )
}