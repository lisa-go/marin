import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type File = string | ArrayBuffer | null;

interface FilesState {
  importedFile: File;
  currentFile: File;
  recentFiles: File[] | null;
}

const initialState: FilesState = {
  importedFile: null,
  currentFile: null,
  recentFiles: null,
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    importFile: (state, action: PayloadAction<File>) => {
      state.importedFile = action.payload;
      state.currentFile = action.payload;
      state.recentFiles = state.recentFiles
        ? [...state.recentFiles, action.payload]
        : [action.payload];
    },
  },
});

export const { importFile } = filesSlice.actions;

export default filesSlice.reducer;
