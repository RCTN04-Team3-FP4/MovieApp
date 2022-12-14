import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: "",
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    let url = `https://www.omdbapi.com/?apikey=dda6127c&s=${search}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        if (action.payload.Response === "True") {
          return {
            ...state,
            movies: action.payload.Search,
            loading: false,
            error: "",
          };
        } else if (action.payload.Response === "False") {
          return {
            ...state,
            movies: action.payload.Error,
            loading: false,
            error: "",
          };
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      });
  },
});

export default moviesSlice.reducer;
