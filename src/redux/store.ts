import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import pageSlice from './slices/pageSlice';
import filesSlice from './slices/filesSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    page: pageSlice,
    files: filesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
