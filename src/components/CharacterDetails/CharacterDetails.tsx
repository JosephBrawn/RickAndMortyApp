import React, { FC } from 'react';
import { Character } from '../../features/characters/types';
import styles from './CharacterDetails.module.scss';

interface CharacterDetailsProps {
    character: Character;
    isModal?: boolean;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ character, isModal }) => {
    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div className={`${styles.container} ${isModal ? styles.modalView : ''}`}>
            <h2 className={styles.name}>{character.name}</h2>
            <div className={styles.details}>
                <img src={character.image} alt={character.name} className={styles.image} />
                <div className={styles.info}>
                    <p>
                        <strong>Status:</strong> {character.status}
                    </p>
                    <p>
                        <strong>Species:</strong> {character.species}
                    </p>
                    <p>
                        <strong>Type:</strong> {character.type || 'Unknown'}
                    </p>
                    <p>
                        <strong>Gender:</strong> {character.gender}
                    </p>
                    <p>
                        <strong>Origin:</strong> {character.origin.name}
                    </p>
                    <p>
                        <strong>Location:</strong> {character.location.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;