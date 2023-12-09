import { configureStore } from '@reduxjs/toolkit'
import globalSettingsReducer from './globalSettingsSlice'
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    globalSettings: globalSettingsReducer,
    user: userReducer
  },
})