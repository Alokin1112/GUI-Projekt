import { createSlice } from '@reduxjs/toolkit'
import { COMMENTS } from '../constants/CustomerReviews.const';
import { ORDERS } from '../constants/Orders.const';
import { generateRandomItems } from '../constants/ChartData.const';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "dawid",
    shops: [
      {
        name: 'Sklep 123',
        comments: COMMENTS,
        orders: ORDERS,
        chartData: generateRandomItems(),
      }
    ],
    selectedShop: 0
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    removeUser: (state) => {
      state.name = null;
    }
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer