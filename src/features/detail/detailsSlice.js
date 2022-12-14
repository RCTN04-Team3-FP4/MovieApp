import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detail: {},
  loading: false,
  error: "",
};

export const fetchDetail = createAsyncThunk(
  "detail/fetchDetail",
  async (id) => {
    let url = `https://www.omdbapi.com/?apikey=dda6127c&i=${id}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetail.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        if (!state.detail) {
          return { detail: {} };
        }
        return { ...state, detail: action.payload, loading: false, error: "" };
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      });
  },
});

export default detailSlice.reducer;
