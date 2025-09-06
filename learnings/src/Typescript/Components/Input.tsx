import React from 'react'

type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {console.log(event)}
  return (
    // <input value={props.value} onChange={(event) => props.handleChange(event)}/>
    <input value={props.value} onChange={handleInputChange}/>
  )
}

export default Input