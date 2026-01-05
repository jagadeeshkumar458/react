import React from 'react'
type TestOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type TestProps<E extends React.ElementType> = TestOwnProps<E> & Omit<React.ComponentProps<E>, keyof TestOwnProps<E>>

function Test<E extends React.ElementType = 'div'>({size, color, children, as}: TestProps<E>) {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}

export default Test