import React from 'react'
import { useSelector } from 'react-redux'

export const IcecreamView = () => {
    const numOficecreams = useSelector((state: any) => state.icecream.numOfIcecreams)
  return (
    <div>
        <h2>Number of icecreams - {numOficecreams}</h2>
        <button>Order icecream</button>
        <button>Restock icecreams</button>
    </div>
  )
}
