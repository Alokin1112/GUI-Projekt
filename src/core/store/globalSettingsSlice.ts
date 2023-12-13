import { createSlice } from '@reduxjs/toolkit'
import i18n from '../translations/i18n'


export const THEME_KEY = "theme";
export const LANGUAGE_KEY = 'language';

export const globalSettingsSlice = createSlice({
  name: 'globalSettings',
  initialState: {
    language: window.localStorage.getItem(LANGUAGE_KEY) || "en",
    theme: window.localStorage.getItem(THEME_KEY) || "light"
  },
  reducers: {
    changeLanguage: (state, action) => {
      if (state.language === action.payload) return;
      state.language = action.payload
      window.localStorage.setItem(LANGUAGE_KEY, state.language);
      i18n.changeLanguage(state.language);
    },
    changeTheme: (state, action) => {
      if (state.theme === action.payload) return;
      state.theme = action.payload
      window.localStorage.setItem(THEME_KEY, state.theme)
    },
  },
});

export const { changeLanguage, changeTheme } = globalSettingsSlice.actions

export default globalSettingsSlice.reducer