import { createSlice } from "@reduxjs/toolkit";
import { AllItems, currentItems, updateFavorites } from "./operations";

const initialState = {
  allItems: [],
  items: [],
  isLoading: false,
  errorMessage: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(AllItems.fulfilled, (state, action) => {
        state.allItems = action.payload;
      })
      .addCase(currentItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateFavorites.fulfilled, (state, action) => {
        //  void( state.items = [...state.items, {...action.payload}]
        state.items = state.items.map((item, idx) => {
          if (item.name !== action.payload.name) {
            return item;
          }
          return action.payload;
        });
      });
    // const index = indexOf state.items[action.payload]

    //   const I = state.items.find((item, idx)=> item[idx] === action.payload)
    // state.items = state.items
    // void( state.items = [...state.items, {...action.payload}]);
    //   state.items  = state.items.map((item, idx)=>{
    //     if(item.name !== action.payload.name){
    //       return item
    //     }
    //     return action.payload
    //   })

    // })
  },
});

// export const { currentItems, updateFavorites } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
