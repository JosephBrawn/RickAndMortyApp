import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/favorites" className={styles.link}>Favorites</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;