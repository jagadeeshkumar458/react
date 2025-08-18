import React from 'react'

type Greekprops = {
    name: string
}

function Greet(props : Greekprops) {
  return (
    <div>
      Welcome {props.name}, you have 10 messages
    </div>
  )
}

export default Greet
