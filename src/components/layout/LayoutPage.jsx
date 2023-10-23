import React from 'react'
import { Header } from '../header/Header'

export function LayoutPage({ children, ...props }) {
  return (
    <div {...props} >
      <Header />
      {
        children
      }
    </div>
  )
}
