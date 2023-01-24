import { Fragment } from "react";
import Header from "../../components/Header";
import { Menu } from "../../components/Menu";
import Banner from "../../components/Banner";

import styles from './homepage.module.scss';
import Footer from "../../components/Footer";

export default function Homepage() {
    return (
        <Fragment>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}