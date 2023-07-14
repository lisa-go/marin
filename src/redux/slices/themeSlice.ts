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
    change: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;
