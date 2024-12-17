import { createSlice } from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;
