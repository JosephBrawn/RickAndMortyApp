import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterList.module.scss';

const CharacterList: FC = () => {
    const characters = useSelector((state: RootState) => state.characters.list);

    if (!characters || characters.length === 0) {
        return <div className={styles.noCharacters}>No characters found.</div>;
    }

    return (
        <div className={styles.list}>
            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;