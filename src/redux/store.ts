import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import pageSlice from './slices/pageSlice';
import filesSlice from './slices/filesSlice';
import toolSlice from './slices/toolSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    page: pageSlice,
    files: filesSlice,
    tool: toolSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
