import React, { useId } from 'react'
import { BsCart } from 'react-icons/bs'
import { BsCart4 } from "react-icons/bs"
import "./cartButton.css"

export function CartButton({ }) {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart__button' htmlFor={cartCheckboxId}>
        <BsCart4 />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
    </>
  )
}
