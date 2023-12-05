import { configureStore } from '@reduxjs/toolkit'
import Nazilya from './features/counterSlice'
import todoReducer from './todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: Nazilya,
    todos:todoReducer,

  },
})