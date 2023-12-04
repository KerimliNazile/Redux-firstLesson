import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  deyer: 0,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.deyer += 1
    },
    decrement: (state) => {
      state.deyer -= 1
    },
    incrementByAmount: (state, action) => {
      state.deyer += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer