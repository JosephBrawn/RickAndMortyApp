import React, { FC, useState } from 'react';
import { Character } from '../../features/characters/types';
import styles from './CharacterCard.module.scss';
import Modal from '../Modal/Modal';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <div
            className={styles.card}
            onClick={openModal}
            style={{ cursor: 'pointer' }}
        >
            <img src={character.image} alt={character.name} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.name}>{character.name}</h3>
                <p className={styles.species}>Species: {character.species}</p>
                <p className={styles.status}>Status: {character.status}</p>


                <Modal isOpen={isModalOpen} onClose={closeModal} onClick={(e) => e.stopPropagation()}>
                    <CharacterDetails character={character} isModal />
                </Modal>
            </div>
        </div>
    );
};

export default CharacterCard;