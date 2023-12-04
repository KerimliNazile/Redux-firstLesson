
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'
import './counter.css'
export function Counter() {
  const say = useSelector((state) => state.counter.deyer)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
       <strong><span className='say'>{say}</span></strong> 
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}