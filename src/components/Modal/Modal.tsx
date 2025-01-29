import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;