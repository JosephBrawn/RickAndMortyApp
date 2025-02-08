import {FC} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';
import {Header} from './components/Header';
import {NotFound} from './components/NotFound';
import style from './app.module.scss';
import {Modal} from './components/Modal';
import {closeModal, selectModalCharacter} from './store/slices/charactersSlice';
import {useDispatch, useSelector} from "react-redux";
import {RootDispatch} from "./store";

const App: FC = () => {
    const modalCharacter = useSelector(selectModalCharacter);
    const dispatch: RootDispatch = useDispatch();

    return (
        <Router>
            <div className={style.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Modal isOpen={!!modalCharacter} onClose={() => dispatch(closeModal())}>
                    {modalCharacter && (
                        <div className={style.modalDetails}>
                            <img src={modalCharacter.image} alt={modalCharacter.name} className={style.modalImage} />
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