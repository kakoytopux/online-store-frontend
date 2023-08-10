import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  value: any
}

const initialState: UserState = {
  value: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (state, data: PayloadAction<any>) => {
      state.value = data.payload;
    },
  },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;
