import {FC} from 'react';
import styles from './CharacterList.module.scss';
import {CharacterCard} from '../../CharacterCard';
import { Character } from '../../../types/character.ts';


interface CharacterListProps {
    characters: Character[];
}

export const CharacterList: FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className={styles.list}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character}  />
            ))}
        </div>
    );
};

