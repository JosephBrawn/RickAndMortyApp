import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character, CharactersResponse, IPageInfo} from '../../types/character';
import {fetchCharacters} from "../../utils/api.ts";
import {RootState} from "../index.ts";

interface CharactersState {
    characters: Character[];
    pageInfo: IPageInfo;
    loading: boolean;
    error: string | null;
    modalCharacter: Character | null;
}

const initialState: CharactersState = {
    characters: [],
    pageInfo: {
        count: 0,
        pages: 0,
        next: "",
        prev: "",
    },
    loading: false,
    error: null,
    modalCharacter: null,
};


interface IParams {
    page: number;
    name: string;
    status: string;
    gender: string;
}
export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (params: IParams): Promise<CharactersResponse> => {
        return await fetchCharacters(params.page, params.name, params.status, params.gender);
    }
);

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<Character | null>) => {
            state.modalCharacter = action.payload;
        },
        closeModal: (state) => {
            state.modalCharacter = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.error = null;
                state.loading = true;
            })

            .addCase(getCharacters.fulfilled, (state, action: PayloadAction<CharactersResponse>) => {
                state.loading = false;
                state.characters = action.payload.results;
                state.pageInfo = action.payload.info;
            })

            .addCase(getCharacters.rejected, (state, action) => {
                state.error = action.error.message || "Something went wrong";
                state.loading = false;
            })
    }
});
export const selectCharacters = (state: RootState) => state.characters.characters
export const selectLoading = (state: RootState) => state.characters.loading
export const selectPageInfo = (state: RootState) => state.characters.pageInfo
export const selectModalCharacter = (state: RootState) => state.characters.modalCharacter
export const { openModal, closeModal } = charactersSlice.actions;
export default charactersSlice.reducer;
