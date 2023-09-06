import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ItemsState {
  value: {
    items: []
  },
}

const initialState: ItemsState = {
  value: {
    items: []
  }
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItemsData: (state, data: PayloadAction<any>) => {
      state.value = data.payload;
    }
  }
});

export const { addItemsData } = itemsSlice.actions;
export default itemsSlice.reducer;
