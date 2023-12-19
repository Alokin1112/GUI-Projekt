import { createSlice } from '@reduxjs/toolkit'
import i18n from '../translations/i18n'
import { REDUX_STATE_TOKEN } from './localStorageMiddleware';

export type ReviewsDisplayed = 'all' | 'positive' | 'negative';

export interface GlobalSettingsState {
  language: "en" | 'pl',
  theme: "light" | 'dark',
  reviewsDisplayed: ReviewsDisplayed,
}

export const globalSettingsSlice = createSlice({
  name: 'globalSettings',
  initialState: (localStorage.getItem(REDUX_STATE_TOKEN)
    ? JSON.parse(localStorage.getItem(REDUX_STATE_TOKEN))
    : {
      language: "en",
      theme: "light",
      reviewsDisplayed: 'all',
    }) as GlobalSettingsState,
  reducers: {
    changeLanguage: (state, action) => {
      if (state.language === action.payload) return;
      state.language = action.payload
      i18n.changeLanguage(state.language);
    },
    changeTheme: (state, action) => {
      if (state.theme === action.payload) return;
      state.theme = action.payload
    },
    changeReviewsDisplayed: (state, action) => {
      if (state.reviewsDisplayed == action.payload) return;
      state.reviewsDisplayed = action.payload;
    }
  },
})

export const { changeLanguage, changeTheme, changeReviewsDisplayed } = globalSettingsSlice.actions

export default globalSettingsSlice.reducer