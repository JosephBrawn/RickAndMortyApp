import React from 'react';
import styles from './CharacterList.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Character } from '../../types/character';


interface CharacterListProps {
    characters: Character[];
    openModal: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, openModal }) => {
    return (
        <div className={styles.list}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} openModal={openModal}/>
            ))}
        </div>
    );
};

export default CharacterList;