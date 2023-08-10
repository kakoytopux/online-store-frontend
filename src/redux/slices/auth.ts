import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  value: boolean
}

const initialState: AuthState = {
  value: true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTrue: state => {
      state.value = true;
    },
    setFalse: state => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = authSlice.actions;
export default authSlice.reducer;
