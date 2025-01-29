import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchCharacters } from '../../features/characters/characterSlice';
import styles from './Pagination.module.scss';

const Pagination: FC = () => {
    const { info } = useSelector((state: RootState) => state.characters);
    const dispatch = useDispatch();

    const handlePageChange = (url: string | null) => {
        if (url) {
            dispatch(fetchCharacters(url));
        }
    };

    if (!info) {
        return null;
    }

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handlePageChange(info.prev)}
                disabled={!info.prev}
                className={styles.button}
            >
                Previous
            </button>
            <button
                onClick={() => handlePageChange(info.next)}
                disabled={!info.next}
                className={styles.button}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;