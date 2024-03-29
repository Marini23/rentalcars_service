import { createSlice } from '@reduxjs/toolkit';

const FavoritesSlice = createSlice({
  name: `favorites`,
  initialState: {
    favoritesItems: [],
  },

  reducers: {
    addFavorites(state, action) {
      state.favoritesItems.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.favoritesItems.findIndex(
        item => item.id === action.payload.id
      );
      state.favoritesItems.splice(index, 1);
    },
  },
});

export const { addFavorites, deleteFavorites } = FavoritesSlice.actions;
export const favoritesReducer = FavoritesSlice.reducer;
