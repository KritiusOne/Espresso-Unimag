import React, { useContext, useId, useState } from 'react'
import { BsCart4 } from "react-icons/bs"
import { ProductsContext } from '../../context/productsContext'
import "./cartButton.css"

export function CartButton({ }) {
  const cartCheckboxId = useId()
  const { viewCart, changeViewFromCart } = useContext(ProductsContext)
  const [checked, setChecked] = useState(false)
  const handleChecked = (e) => {
    if (checked == viewCart && !viewCart) {
      changeViewFromCart(true)
      setChecked(true)
    } else if (checked !== viewCart && !viewCart) {
      setChecked(false)
      changeViewFromCart(true)
    }
  }
  return (
    <>
      <label className='cart__button' htmlFor={cartCheckboxId}>
        <BsCart4 />
      </label>
      <input id={cartCheckboxId} type='checkbox' value={checked} hidden onChange={handleChecked} />
    </>
  )
}
