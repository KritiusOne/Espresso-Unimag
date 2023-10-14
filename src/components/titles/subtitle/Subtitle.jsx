import React from 'react'

export function Subtitle({ children, ...props }) {
  return (
    <h2 {...props}>
      {children}
    </h2>
  )
}
