import axios from 'axios';
import {CharactersResponse} from '../types/character';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page = 1, name = '', status = '', gender = ''): Promise<CharactersResponse> => {
    const params = { page, name, status, gender };
    try {
        const response = await axios.get<CharactersResponse>(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};