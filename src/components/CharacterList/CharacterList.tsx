import React from 'react';
import styles from './CharacterList.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Character } from '../../types/character';

interface CharacterListProps {
    characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className={styles.list}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;