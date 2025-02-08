import {FC,ReactNode,MouseEvent} from 'react';
import styles from './Modal.module.scss';

import { toggleFavorite } from '../../../store/slices/favoriteSlice.ts';
import {useDispatch, useSelector} from "react-redux";
import {selectFavoriteCards} from "../../../store/slices/favoriteSlice.ts";
import {RootDispatch} from "../../../store";
import {selectModalCharacter} from "../../../store/slices/charactersSlice.ts";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const dispatch: RootDispatch = useDispatch();
    const modalCharacter = useSelector(selectModalCharacter);
    const favorites = useSelector(selectFavoriteCards);
    const isFavorite = favorites?.some((fav) => fav.id === modalCharacter?.id);
    if (!isOpen) return null;

    const handleToggleFavorite = (e: MouseEvent) => {
        e.stopPropagation()
        if (modalCharacter) {
            dispatch(toggleFavorite(modalCharacter));
        }
    };

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
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
