import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import './assets/styles/global.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;