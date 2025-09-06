import React from 'react'

type Greekprops = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

function Greet(props : Greekprops) {
  return (
    <div>
      {props.isLoggedIn ? `Welcome ${props.name}, you have ${props.messageCount} unread messages` : `Welcome Guest`}
    </div>
  )
}

export default Greet
