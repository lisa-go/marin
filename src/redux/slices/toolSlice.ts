import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ToolState {
  current: string | null;
}

const initialState: ToolState = {
  current: null,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    changeTool: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { changeTool } = toolSlice.actions;

export default toolSlice.reducer;
