import React from 'react'

export function Title({ children, ...props }) {
  return (
    <h1 {...props}>
      {children}
    </h1>
  )
}
