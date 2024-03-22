import { createSlice } from "@reduxjs/toolkit";
import { allItems, currentItems, updateFavorites } from "./operations";

const initialState = {
  allItems: [],
  items: [],
  page: 1,
  isLoading: false,
  errorMessage: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allItems.fulfilled, (state, action) => {
        state.allItems = action.payload;
      })
      .addCase(currentItems.fulfilled, (state, action) => {
        state.items =
          state.items?.length > 0
            ? [...state.items, ...action.payload.data]
            : action.payload.data;
        state.page = action.payload.page;
      })
      .addCase(updateFavorites.fulfilled, (state, action) => {
        state.items = state.items.map((item, idx) => {
          if (item.name !== action.payload.name) {
            return item;
          }
          return action.payload;
        });
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
