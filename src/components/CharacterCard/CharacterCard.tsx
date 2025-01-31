import React from 'react';
import styles from './CharacterCard.module.scss';
import { Character } from '../../types/character';
import { useAppDispatch } from '../../store/hooks';
import { toggleFavorite, openModal } from '../../store/slices/charactersSlice';
import { useAppSelector } from '../../store/hooks';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.characters.favorites);

    const isFavorite = favorites.some((fav) => fav.id === character.id);

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleFavorite(character));
    };

    const handleOpenModal = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        dispatch(openModal(character));
    };


    const getStatusClass = () => {
        if (character.status === 'Alive') {
            return `${styles.status} ${styles.alive}`;
        } else if (character.status === 'Dead') {
            return `${styles.status} ${styles.dead}`;
        } else if (character.status === 'unknown') {
            return `${styles.status} ${styles.unknown}`;
        }
        return styles.status;
    };



    return (
        <div className={styles.card}>
            <img src={character.image} alt={character.name} className={styles.image} onClick={handleOpenModal} />
            <div className={styles.content}>
                <h3 className={styles.name}>{character.name}</h3>
                <p className={styles.info}>
                    Status: <span className={getStatusClass()}>{character.status}</span>
                </p>
                <p className={styles.info}>
                    Species: <span className={styles.species}>{character.species}</span>
                </p>
                <p className={styles.info}>
                    Gender: <span className={styles.gender}>{character.gender}</span>
                </p>
                <button
                    onClick={handleToggleFavorite}
                    className={`${styles.favoriteButton} ${isFavorite ? styles.isFavorite : ''}`}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

export default CharacterCard;