import {FC} from 'react';
import styles from './Favorites.module.scss';
import {CharacterList} from '../../../components/CharacterList';
import { useAppSelector } from '../../../store/hooks.ts';
import { Character } from '../../../types/character.ts';
import {useAppDispatch} from "../../../store";

export const Favorites: FC = () => {
    const favoriteCharacters = useAppSelector((state) => state.characters.favorites);
    const dispatch = useAppDispatch()
    const openModal = (character: Character) => {
        dispatch({ type: 'OPEN_MODAL', payload: character });
    };


    return (
        <div className={styles.container}>
            <h2 className={styles.favorite}>Favorite Characters</h2>
            {favoriteCharacters.length > 0 ? (
                <CharacterList characters={favoriteCharacters} openModal={openModal}/>
            ) : (
                <p>No characters added to favorites yet.</p>
            )}
        </div>
    );
};

