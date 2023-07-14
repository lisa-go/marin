import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  current: string;
}

const initialState: ThemeState = {
  current: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
