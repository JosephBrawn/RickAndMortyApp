import React, { FC, useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchCharacters } from '../../features/characters/characterSlice';
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.characters);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (loading) {
        return <div className={styles.loading}>Loading characters...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <CharacterList />
            <Pagination />
        </div>
    );
};

export default HomePage;