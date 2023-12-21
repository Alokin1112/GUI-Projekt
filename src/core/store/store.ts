import { configureStore } from '@reduxjs/toolkit'
import globalSettingsReducer from './globalSettingsSlice'
import userReducer from './userSlice'
import localStorageMiddleware from './localStorageMiddleware'

export default configureStore({
  reducer: {
    globalSettings: globalSettingsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})