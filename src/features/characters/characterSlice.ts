import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Character, CharactersState, Info } from './types';

const initialState: CharactersState = {
    list: [],
    info: null,
    loading: false,
    error: null,
};

export const fetchCharacters = createAsyncThunk<
    { results: Character[]; info: Info },
    string | undefined,

    { rejectValue: string }
>(
    'characters/fetchCharacters',
    async (url = 'https://rickandmortyapi.com/api/character', { rejectWithValue }) => {
        try {
            const response = await axios.get<{ results: Character[]; info: Info }>(url);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.message || 'Failed to fetch characters');
        }
    }
);

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<{ results: Character[]; info: Info }>) => {
                state.loading = false;
                state.list = action.payload.results;
                state.info = action.payload.info;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch characters';
            });
    },
});

export default characterSlice.reducer;