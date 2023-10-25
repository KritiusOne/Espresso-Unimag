import React from 'react'
import "./modal.css"

export function Modal({ children }) {
  return (
    <section className='modalOverlay'>
      <section className='modal'>
        {
          children
        }
      </section>
    </section>
  )
}
