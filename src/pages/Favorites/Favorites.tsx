import React from 'react';
import styles from './Favorites.module.scss';
import CharacterList from '../../components/CharacterList/CharacterList';
import { useAppSelector } from '../../store/hooks';
import { Character } from '../../types/character';
import {useAppDispatch} from "../../store";

const Favorites: React.FC = () => {
    const favoriteCharacters = useAppSelector((state) => state.characters.favorites);
    const dispatch = useAppDispatch()
    const openModal = (character: Character) => {
        dispatch({type: 'OPEN_MODAL', payload: character})
    };


    return (
        <div className={styles.container}>
            <h2>Favorite Characters</h2>
            {favoriteCharacters.length > 0 ? (
                <CharacterList characters={favoriteCharacters} openModal={openModal}/>
            ) : (
                <p>No characters added to favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;