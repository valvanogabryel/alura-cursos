import { Fragment } from "react";
// components
import Header from "../../components/Header";
import { Menu } from "../../components/Menu";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
// end of components

import styles from './homepage.module.scss';
import Populars from "../../components/Populars";

export default function Homepage() {
    return (
        <Fragment>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.gallery}>
                    <Gallery />
                    <Populars />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}