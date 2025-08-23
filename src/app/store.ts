import { configureStore } from "@reduxjs/toolkit";
import bookmark from "./redux/useBookmark";
import search from "./redux/useSearch"
export const store = configureStore({
  reducer: {
    bookmark,
    search,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
