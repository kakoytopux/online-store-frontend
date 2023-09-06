import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import authSlice from './slices/auth';
import itemsSlice from './slices/items';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    items: itemsSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
