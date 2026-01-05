import React from 'react'

// type InputProps = {
//     type: 'text' | 'password'
// } & React.ComponentProps<'input'>

type InputProps = React.ComponentProps<'input'>

function CustomInput(props: InputProps) {
  return (
    // <input type={type} {...rest} />
    <input {...props} />
  )
}

export default CustomInput