import { createSlice } from "@reduxjs/toolkit";
import { allItems, currentItems, updateFavorites } from "./operations";

const initialState = {
  allItems: [],
  items: [],
  favorites: [],
  page: 0,
  isLoading: false,
  errorMessage: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers:{
    setFilteredItems: (state, action)=>{
      return {...state, items: [...action.payload], disable: true}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(allItems.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(allItems.fulfilled, (state, action) => {
        state.allItems = action.payload;
        state.favorites = action.payload.filter((item) => item.favorite);
        state.isLoading = false;
      })
      .addCase(currentItems.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.data];
        state.page = action.payload.page;
      })
      .addCase(updateFavorites.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return action.payload;
        });
        state.favorites = action.payload.favorite
          ? [...state.favorites, action.payload]
          : state.favorites.filter((item) => item.id !== action.payload.id);
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const {setFilteredItems} = catalogSlice.actions;