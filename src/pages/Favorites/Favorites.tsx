import React from 'react';
import styles from './Favorites.module.scss';
import CharacterList from '../../components/CharacterList/CharacterList';
import { useAppSelector } from '../../store/hooks';


const Favorites: React.FC = () => {
    const favoriteCharacters = useAppSelector((state) => state.characters.favorites);

    return (
        <div className={styles.container}>
            <h2>Favorite Characters</h2>
            {favoriteCharacters.length > 0 ? (
                <CharacterList characters={favoriteCharacters} />
            ) : (
                <p>No characters added to favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;