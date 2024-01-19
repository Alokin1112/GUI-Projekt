import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../constants/CustomerReviews.const";
import { ORDERS } from "../constants/Orders.const";
import { generateRandomItems } from "../constants/ChartData.const";
import { PRODUCTS } from "../constants/Products.const";
import { ASPECTS } from "../constants/SaleQualityData.const";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    shops: [
      {
        name: "Sklep 123",
        comments: COMMENTS,
        orders: ORDERS,
        chartData: generateRandomItems(),
        aspects: ASPECTS,
        products: PRODUCTS,
      },
    ],
    selectedShop: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    removeUser: (state) => {
      state.name = null;
    },
    addStore: (state, action) => {
      state.shops.push(action.payload);
    },
    setSelected: (state, action) => {
      state.selectedShop = action.payload;
    },
  },
});

export const { setUser, removeUser, addStore, setSelected } = userSlice.actions;

export default userSlice.reducer;
