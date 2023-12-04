import { configureStore } from '@reduxjs/toolkit'
import Nazilya from './features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: Nazilya,
  },
})