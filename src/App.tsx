import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import styles from './assets/styles/main.module.scss';
import Modal from './components/Modal/Modal';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { closeModal } from './store/slices/charactersSlice';

const App: React.FC = () => {
    const modalCharacter = useAppSelector((state) => state.characters.modalCharacter);
    const dispatch = useAppDispatch();

    return (
        <Router>
            <div className={styles.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Modal isOpen={!!modalCharacter} onClose={() => dispatch(closeModal())}>
                    {modalCharacter && (
                        <div className={styles.modalDetails}>
                            <img src={modalCharacter.image} alt={modalCharacter.name} className={styles.modalImage} />
                            <h2>{modalCharacter.name}</h2>
                            <p>Status: {modalCharacter.status}</p>
                            <p>Species: {modalCharacter.species}</p>
                            <p>Gender: {modalCharacter.gender}</p>
                            <p>Origin: {modalCharacter.origin.name}</p>
                            <p>Location: {modalCharacter.location.name}</p>
                        </div>
                    )}
                </Modal>
            </div>
        </Router>
    );
};

export default App;