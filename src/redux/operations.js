import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios'
// import toast from "react-hot-toast"



// const getOption = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

  export const currentItems = createAsyncThunk(
    'catalog/currentItems',
    async (_, thunkAPI) => {
      try {
        const res = await axios('/campers');
        console.dir(res.data)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );