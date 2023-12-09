import { createSlice } from '@reduxjs/toolkit'

export const globalSettingsSlice = createSlice({
  name: 'globalSettings',
  initialState: {
    language: 'en',
    theme: 'light'
  },
  reducers: {
    changeLanguage: (state, action) => {
      if (state.language === action.payload) return;
      state.language = action.payload
    },
    changeTheme: (state, action) => {
      if (state.theme === action.payload) return;
      state.theme = action.payload
    },
  },
})

export const { changeLanguage, changeTheme } = globalSettingsSlice.actions

export default globalSettingsSlice.reducer