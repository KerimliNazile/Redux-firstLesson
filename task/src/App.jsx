import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterSlice from './features/counterSlice'
import { Counter } from './features/Counter/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <CounterSlice/> */}
   <Counter/>
    </>
  )
}

export default App
