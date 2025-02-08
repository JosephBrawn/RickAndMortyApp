import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character, Ifavorites} from "../../types/character.ts";
import {RootState} from "../index.ts";

const initialState:Ifavorites = {
    favoriteCards:[],
    modalCharacter: null,
}
const favoriteSlice=createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Character>) => {
            const character = action.payload;
            const isFavorite = state.favoriteCards.some((fav) => fav.id === character.id);
            if (isFavorite) {
                state.favoriteCards = state.favoriteCards.filter((fav) => fav.id !== character.id);
            } else {
                state.favoriteCards.push(character);
            }
        },

        setFavoriteCards: (state, action: PayloadAction<Character>) => {
            state.favoriteCards = [...state.favoriteCards,action.payload]
        },

        openModal: (state, action: PayloadAction<Character | null>) => {
            state.modalCharacter = action.payload;
        },

        closeModal: (state) => {
            state.modalCharacter = null;
        },
    }
})

export const selectFavoriteCards = (state: RootState) => state.favorites.favoriteCards;
export const {  setFavoriteCards, toggleFavorite  } = favoriteSlice.actions;
export default favoriteSlice.reducer;