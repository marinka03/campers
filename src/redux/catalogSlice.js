import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: "",
  value: 0,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = catalogSlice.actions;
export const catalogReducer =  catalogSlice.reducer;
