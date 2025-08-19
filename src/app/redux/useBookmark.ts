import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "bookmark",
  initialState: {
    value: JSON.parse(localStorage.getItem("movie") || "[]"),
  },
  reducers: {
    toggleBookmark: (state, action) => {
      const existMovie = state.value.some(
        (item: any) => item.id === action.payload.id
      );
      if (existMovie) {
        state.value = state.value.filter(
          (item: any) => item.id !== action.payload.id
        );
        localStorage.setItem("movie", JSON.stringify(state.value));
      } else {
        state.value = [...state.value, action.payload];
        localStorage.setItem("movie", JSON.stringify(state.value));
      }
    },
  },
});

export const { toggleBookmark } = counterSlice.actions;

export default counterSlice.reducer;
