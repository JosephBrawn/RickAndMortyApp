import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import styles from './assets/styles/main.module.scss';

const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;