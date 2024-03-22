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
      console.dir(res.data);
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
      const res = await axios(`campers/?page=${data.page}&limit=4`);
      console.dir(res.data);
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
      console.log("cat", JSON.stringify({ favorite: data.favorite }));
      const response = await axios.put(
        `campers/${data.id}`,
        JSON.stringify({ favorite: data.favorite })
      );
      if (response.status !== 200) {
        console.log("Error");
      } else {
        console.dir(response.data);
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
