import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        favorites: favoriteReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type RootDispatch = AppStore['dispatch'];