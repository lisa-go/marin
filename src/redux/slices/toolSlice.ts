import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ToolState {
  current: string | null;
  color: string | null;
}

const initialState: ToolState = {
  current: null,
  color: null,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    changeTool: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    resetColor: (state) => {
      state.color = null;
    },
  },
});

export const { changeTool, changeColor, resetColor } = toolSlice.actions;

export default toolSlice.reducer;
