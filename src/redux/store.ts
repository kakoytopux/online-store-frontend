import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import authSlice from './slices/auth';

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
