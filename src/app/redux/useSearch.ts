import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "search",
  initialState: {
    value: [],
  },
  reducers: {
    element: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { element } = counterSlice.actions;

export default counterSlice.reducer;
