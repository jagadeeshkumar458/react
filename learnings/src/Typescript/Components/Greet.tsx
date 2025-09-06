import React from 'react'

type Greekprops = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

function Greet(props : Greekprops) {
  let {messageCount = 0} = props;
  return (
    <div>
      {props.isLoggedIn ? `Welcome ${props.name}, you have ${messageCount} unread messages` : `Welcome Guest`}
    </div>
  )
}

export default Greet
