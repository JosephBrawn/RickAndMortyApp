import {FC} from 'react';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    );
};

