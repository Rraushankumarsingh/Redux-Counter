import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement,reset} from '../Redux/Action';


export const Counter = () => {
    let count= useSelector((store)=> store.count)
    let dispatch=useDispatch();
  return (
    <div>
    Counter :{count}
    <br />
    <br />
    <button  onClick={()=>dispatch(increment(1))}>increment</button>
    <button  onClick={()=>dispatch(decrement(1))}>decrement </button>
    <button  onClick={()=>dispatch(reset(0))}>reset</button>
    </div>

  )
}
