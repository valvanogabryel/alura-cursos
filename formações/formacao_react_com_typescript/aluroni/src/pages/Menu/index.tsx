import { ReactComponent as Logo } from 'assets/logo.svg';
import { useState } from 'react';

import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordenator from './Ordenator';
import Items from './Items';

import styles from './Menu.module.scss';

const Menu = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordenator, setOrdenator] = useState('');

    return (
        <main>
            <nav className={styles.nav}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa!
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <SearchEngine
                    search={search}
                    setSearch={setSearch}
                />
                <div className={styles.menu__filters}>
                    <Filters
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Ordenator
                        ordenator={ordenator}
                        setOrdenator={setOrdenator}
                    />
                </div>
                <Items />
            </section>
        </main>
    );
}

export default Menu;