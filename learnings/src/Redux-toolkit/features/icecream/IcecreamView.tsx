import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
    const dispatch = useDispatch();
    const numOficecreams = useSelector((state: any) => state.icecream.numOfIcecreams)
  return (
    <div>
        <h2>Number of icecreams - {numOficecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <button onClick={() => dispatch(restocked(5))}>Restock icecreams</button>
    </div>
  )
}
