import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  value: any
}

const initialState: UserState = {
  value: true
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserNull: state => {
      state.value = null;
    },
    addUserData: (state, data: PayloadAction<any>) => {
      state.value = data.payload;
    },
  },
});

export const { setUserNull, addUserData } = userSlice.actions;
export default userSlice.reducer;
