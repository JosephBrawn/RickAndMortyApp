import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // Добавлено onClick
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, onClick }) => {
    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={onClick}>  {/* Применяем onClick */}
                <button className={styles.closeButton} onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;