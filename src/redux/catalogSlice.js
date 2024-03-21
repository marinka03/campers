import { createSlice } from "@reduxjs/toolkit";
import { currentItems } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(currentItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
