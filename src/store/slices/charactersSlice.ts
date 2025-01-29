import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/character';

interface CharactersState {
    favorites: Character[];
}

const initialState: CharactersState = {
    favorites: [],
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
    },
});

export const { toggleFavorite } = charactersSlice.actions;
export default charactersSlice.reducer;