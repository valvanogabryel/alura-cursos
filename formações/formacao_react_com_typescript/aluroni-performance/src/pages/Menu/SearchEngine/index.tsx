import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './SearchEngine.module.scss';

interface SearchEngineProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchEngine = ({ search, setSearch }: SearchEngineProps) => {
    return (
        <div className={styles.searchEngine}>
            <input
                type="text"
                value={search}
                placeholder='Buscar'
                onChange={(event) =>
                    setSearch(event.target.value)}
            />
            <CgSearch
                size={20}
                color='#4c4d5e'
            />
        </div>
    );
};

export default SearchEngine;