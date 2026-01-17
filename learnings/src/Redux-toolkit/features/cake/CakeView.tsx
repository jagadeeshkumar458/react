import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state: any) => state.cake.numOfCakes)
  const [value, setValue] = useState<number>(1);
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
    </div>
  )
}
