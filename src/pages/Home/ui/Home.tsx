import { useEffect, useState,FC } from 'react';
import styles from './Home.module.scss';
import {CharacterList} from '../../../components/CharacterList';
import {SearchBar} from '../../../components/SearchBar';
import {FilterBar} from '../../../components/FilterBar';
import { Character } from '../../../types/character.ts';
import {Loader} from '../../../components/Loader';
import {RootDispatch} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters, selectCharacters, selectLoading, selectPageInfo} from "../../../store/slices/charactersSlice.ts";

export const Home: FC = () => {
    // const [characters, setCharacters] = useState<Character[]>([]);
    // const [loading, setLoading] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [page, setPage] = useState(1);
    const dispatch: RootDispatch = useDispatch()

    const characters = useSelector(selectCharacters)
    const isLoading = useSelector(selectLoading)
    const pageInfo = useSelector(selectPageInfo)
    const totalPages = pageInfo.pages;

    // useEffect(() => {
    //     const loadCharacters = async () => {
    //         setLoading(true);
    //         try {
    //             const data = await fetchCharacters(page, searchName, statusFilter, genderFilter);
    //             setCharacters(data.results);
    //             setTotalPages(data.info.pages);
    //         } catch (error) {
    //             console.error('Error fetching characters:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     loadCharacters();
    // }, [page, searchName, statusFilter, genderFilter]);

    useEffect(() => {
        dispatch(getCharacters({
            page: page,
            name: searchName,
            status: statusFilter,
            gender: genderFilter,
        }))
    }, [dispatch, page, searchName, statusFilter, genderFilter]);

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
            {isLoading ? <Loader /> : <CharacterList characters={characters} openModal={openModal}/>}
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

