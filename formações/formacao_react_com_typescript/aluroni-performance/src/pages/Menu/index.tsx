import { useState } from 'react';

import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordenator, { OrdenatorOptions } from './Ordenator';
import Items from './Items';
// styles
import styles from './Menu.module.scss';
import themeStyles from 'styles/Theme.module.scss';

const Menu = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordenator, setOrdenator] = useState<OrdenatorOptions>('');

    return (
        <section className={styles.menu}>
            <h3 className={themeStyles.title}>Cardápio</h3>
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
            <Items
                search={search}
                filter={filter}
                ordenator={ordenator}
            />
        </section>

    );
};

export default Menu;