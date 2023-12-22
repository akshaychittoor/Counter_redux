import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  const [range,setReange]=useState('')
  // useSelector Hook is used to access value from store
  // useDispatch Hook is used to access functions inside action  
  const dispatch = useDispatch();
  const count = useSelector(state=>state.counter.value);
  console.log("its a rang",range);
  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
        <h1 style={{fontSize:"50px",color:"black"}}>{count}</h1>
   
    <div className='mt-2'>
        <button className='btn btn-danger'onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
        <button className='btn btn-primary ms-2'onClick={()=>dispatch(reset())} style={{width:"105px"}}>Reset</button>
        <button className='btn btn-success ms-2'onClick={()=>dispatch(increment(Number(range)))} >Increment</button>
    </div>
    </div>
    <div className='mt-4 w-100'>
      <input type="text" placeholder='Enter the range' className='form-control border border-primary'onChange={(e)=>setReange(e.target.value)} />
    </div>
    </>
  )
}

export default Counter;