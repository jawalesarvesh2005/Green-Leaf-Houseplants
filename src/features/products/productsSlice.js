// src/features/products/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/productsData";



const initialState = {
  items: productsData, // initialize from data file
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
