import { useState } from 'react'
import './App.css'
import { Counter } from './features/Counter/counter'
import Todos from './todo/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <Counter/>
   <Todos/>
   
    </>
  )
}

export default App
