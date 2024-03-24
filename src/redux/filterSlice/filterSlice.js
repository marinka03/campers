import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {},
  reducers: {
    filterContact(_, action) {
      return action.payload;
    },
    changeFilterItems(state, action){
      if(action.payload.split(',').includes('Ukraine')){
        return {...state, 'location': action.payload}
      }
      if(!["Van", "Fully Integrated", "Alcove"].includes(action.payload)){
        return {...state, [action.payload]: !state[action.payload]}
      }
      return {...state, 'vehicle': action.payload}
    }
  },
});

export const filterReducer = filterSlice.reducer;
export const {changeFilterItems} = filterSlice.actions;