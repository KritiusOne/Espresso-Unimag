import React from 'react'

export function Button({ clickHandler, title = "", Icon, ...props }) {
  return (
    <button onClick={clickHandler} {...props}>
      <strong className='button__title' >
        {
          title
        }
      </strong>
      {
        Icon ? <Icon /> : ""
      }
    </button>
  )
}
