import React from 'react'

type VerticalPosition = 'top' | 'center' | 'bottom'
type HorizontalPosition = 'left' | 'center' | 'right'

type ToastProps = {
    position:
    | Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'>
    | 'center'
}

function Toast({ position }: ToastProps) {
  return (
    <div>Toast - {position}</div>
  )
}

export default Toast