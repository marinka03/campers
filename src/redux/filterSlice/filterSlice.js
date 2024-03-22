import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    filterContact(_, action) {
      return action.payload;   //МАЄ ПРИХОДИТИ ОБ'ЄКТ З УСІМА ФІЛЬТРАМИ ТА ЗАПИСУВАТИСЯ В STATE
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {filterContact} = filterSlice.actions;