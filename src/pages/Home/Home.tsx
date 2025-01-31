import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import { fetchCharacters } from '../../utils/api';
import { Character } from '../../types/character';
import Loader from '../../components/Loader/Loader';
import {useAppDispatch} from "../../store";

const Home: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const loadCharacters = async () => {
            setLoading(true);
            try {
                const data = await fetchCharacters(page, searchName, statusFilter, genderFilter);
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            } catch (error) {
                console.error('Error fetching characters:', error);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, [page, searchName, statusFilter, genderFilter]);

    const handleSearch = (query: string) => {
        setSearchName(query);
        setPage(1);
    };

    const handleFilter = (status: string, gender: string) => {
        setStatusFilter(status);
        setGenderFilter(gender);
        setPage(1);
    };

    const handlePreviousPage = () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setPage((prev) => Math.min(prev + 1, totalPages));
    };
    const openModal = (character: Character) => {
        dispatch({type: 'OPEN_MODAL', payload: character})
    };


    return (
        <div className={`${styles.container} ${styles.home}`}>
            <SearchBar onSearch={handleSearch} />
            <FilterBar onFilter={handleFilter} />
            {loading ? <Loader /> : <CharacterList characters={characters} openModal={openModal}/>}
            <div className={styles.pagination}>
                <button onClick={handlePreviousPage} disabled={page <= 1} className={styles.button}>
                    Previous
                </button>
                <span>
          {page} / {totalPages}
        </span>
                <button onClick={handleNextPage} disabled={page >= totalPages} className={styles.button}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;