import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
// import toast from "react-hot-toast"

// const getOption = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

export const allItems = createAsyncThunk(
  "catalog/AllItems",
  async (_, thunkAPI) => {
    try {
      const res = await axios("campers/");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentItems = createAsyncThunk(
  "catalog/currentItems",
  async (data, thunkAPI) => {
    try {
      const res = await axios(`campers/?page=${data.page}&limit=4&filter=`);
      return {data: res.data, page: data.page};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFavorites = createAsyncThunk(
  "catalog/updateFavorites",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(
        `campers/${data.id}`,
        { favorite: data.favorite }
      );
      if (response.status !== 200) {
        console.log("Error");
      } else {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// items.map((el)=>{
//   el.gallery[0]
// })
