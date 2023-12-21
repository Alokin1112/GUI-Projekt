import { createSlice } from '@reduxjs/toolkit'
import i18n from '../translations/i18n'
import { REDUX_STATE_TOKEN } from './localStorageMiddleware';

export type ReviewsDisplayed = 'all' | 'positive' | 'negative';

export interface ChartSettings {
  type: 'line' | 'bar',
  previousSerieVisible: boolean,
  range: 'day' | 'week' | 'month',
  presentedValues: 'cashFlow' | 'soldItems'
}

export interface GlobalSettingsState {
  language: "en" | 'pl',
  theme: "light" | 'dark',
  reviewsDisplayed: ReviewsDisplayed,
  chart: ChartSettings,
}

const InitialState: GlobalSettingsState = {
  language: "en",
  theme: "light",
  reviewsDisplayed: 'all',
  chart: {
    type: 'line',
    previousSerieVisible: false,
    range: 'day',
    presentedValues: 'cashFlow'
  }
}

export const globalSettingsSlice = createSlice({
  name: 'globalSettings',
  initialState: (localStorage.getItem(REDUX_STATE_TOKEN)
    ? { ...InitialState, ...(JSON.parse(localStorage.getItem(REDUX_STATE_TOKEN)) || {}) }
    : InitialState) as GlobalSettingsState,
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
    },
    changeChartSettings: (state, action) => {
      state.chart = action.payload;
    }
  },
})

export const { changeLanguage, changeTheme, changeReviewsDisplayed, changeChartSettings } = globalSettingsSlice.actions

export default globalSettingsSlice.reducer