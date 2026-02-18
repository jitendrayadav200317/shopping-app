import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
};

export const fatuchproduct = createAsyncThunk(
  "/product",
  async (data, { rejectedWithValue }) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/product`,
        data,
      );
      return res.data;
    } catch (error) {
      return rejectedWithValue(error.response?.data || "fatch product failed");
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fatuchproduct.pending, (state) => {
        state.product = [];
      })
      .addCase(fatuchproduct.fulfilled, (state, action) => {
        state.product = action.payload.product;
      })
      .addCase(fatuchproduct.rejected, (state, action) => {
        state.product = [];
      });
  },
});

export default productSlice.reducer;
