import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

type FileContent = string | ArrayBuffer | null;

export interface File {
  content: FileContent;
  id: string;
}

interface FilesState {
  importedFile: File | null;
  currentFile: File | null;
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
    importFile: (state, action: PayloadAction<FileContent>) => {
      const id = uniqid();
      state.importedFile = { content: action.payload, id: id };
      state.currentFile = { content: action.payload, id: id };
      state.recentFiles = state.recentFiles
        ? [...state.recentFiles, { content: action.payload, id: id }]
        : [{ content: action.payload, id: id }];
    },
    createFile: (state) => {
      const id = uniqid();
      state.currentFile = { content: ' ', id: id };
      state.recentFiles = state.recentFiles
        ? [...state.recentFiles, { content: ' ', id: id }]
        : [{ content: ' ', id: id }];
    },
    editCurrentFile: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      if (state.currentFile) state.currentFile.content = action.payload.content;
      if (state.recentFiles)
        state.recentFiles.filter(
          (file) => file.id === state.currentFile?.id
        )[0].content = action.payload.content;
    },
  },
});

export const { importFile, createFile, editCurrentFile } = filesSlice.actions;

export default filesSlice.reducer;
