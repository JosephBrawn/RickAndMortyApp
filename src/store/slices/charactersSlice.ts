import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/character';

interface CharactersState {
    favorites: Character[];
    modalCharacter: Character | null;
}

const initialState: CharactersState = {
    favorites: [],
    modalCharacter: null,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Character>) => {
            const character = action.payload;
            const isFavorite = state.favorites.some((fav) => fav.id === character.id);
            if (isFavorite) {
                state.favorites = state.favorites.filter((fav) => fav.id !== character.id);
            } else {
                state.favorites.push(character);
            }
        },
        openModal: (state, action: PayloadAction<Character | null>) => {
            state.modalCharacter = action.payload;
        },
        closeModal: (state) => {
            state.modalCharacter = null;
        },
    },
});

export const { toggleFavorite, openModal, closeModal } = charactersSlice.actions;
export default charactersSlice.reducer;
