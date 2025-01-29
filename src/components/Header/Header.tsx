import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    Rick and Morty
                </Link>
            </div>
        </header>
    );
};

export default Header;