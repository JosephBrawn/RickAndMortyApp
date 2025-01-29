import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={handleInputChange}
                className={styles.input}
            />
            <button className={styles.button} onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;