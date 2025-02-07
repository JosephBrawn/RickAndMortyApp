import  { useState,FC } from 'react';
import styles from './FilterBar.module.scss';

interface FilterBarProps {
    onFilter: (status: string, gender: string) => void;
}

export const FilterBar: FC<FilterBarProps> = ({ onFilter }) => {
    const [status, setStatus] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

    const handleApplyFilters = () => {
        onFilter(status, gender);
    };

    const handleClearFilters = () => {
        setStatus('');
        setGender('');
        onFilter('', '');
    };

    return (
        <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
                <label htmlFor="status">Status:</label>
                <select id="status" value={status} onChange={handleStatusChange}>
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" value={gender} onChange={handleGenderChange}>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.buttons}>
                <button className={styles.applyButton} onClick={handleApplyFilters}>Apply</button>
                <button className={styles.clearButton} onClick={handleClearFilters}>Clear</button>
            </div>
        </div>
    );
};

