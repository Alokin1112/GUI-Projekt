import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "dawid",
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