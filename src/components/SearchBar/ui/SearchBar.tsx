import  { useState,ChangeEvent,FC } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

