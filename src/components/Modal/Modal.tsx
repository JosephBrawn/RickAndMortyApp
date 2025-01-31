import React from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorite } from '../../store/slices/charactersSlice';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const dispatch = useAppDispatch();
    const modalCharacter = useAppSelector((state) => state.characters.modalCharacter);
    const favorites = useAppSelector((state) => state.characters.favorites);
    const isFavorite = favorites?.some((fav) => fav.id === modalCharacter?.id);
    if (!isOpen) return null;

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (modalCharacter) {
            dispatch(toggleFavorite(modalCharacter));
        }
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
                {modalCharacter && <button
                    onClick={handleToggleFavorite}
                    className={`${styles.favoriteButton} ${isFavorite ? styles.isFavorite : ''}`}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>}
            </div>
        </div>
    );
};

export default Modal;