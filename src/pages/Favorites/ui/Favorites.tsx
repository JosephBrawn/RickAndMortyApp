import {FC} from 'react';
import styles from './Favorites.module.scss';
import {CharacterList} from '../../../components/CharacterList';
import { Character } from '../../../types/character.ts';
import {RootDispatch} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {selectFavoriteCards} from "../../../store/slices/favoriteSlice.ts";

export const Favorites: FC = () => {
    const favoriteCharacters = useSelector(selectFavoriteCards);
    const dispatch: RootDispatch = useDispatch()
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

