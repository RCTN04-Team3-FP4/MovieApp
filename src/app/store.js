import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "../features/detail/detailsSlice";
import moviesSlice from "../features/movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    detail: detailsSlice,
  },
});
