import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        jobs: [] as any[],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.jobs.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload.id);
        }
    }

});

export const {addFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
export const {removeFavorite} = favoritesSlice.actions;