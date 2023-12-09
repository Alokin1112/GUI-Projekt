import { configureStore } from '@reduxjs/toolkit'
import globalSettingsReducer from './globalSettingsSlice'


export default configureStore({
  reducer: {
    globalSettings: globalSettingsReducer
  },
})