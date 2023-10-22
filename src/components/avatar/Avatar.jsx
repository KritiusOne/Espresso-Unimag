import React, { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import "./avatar.css"

export function Avatar() {
  const { user } = useContext(ProductsContext)
  return (
    <div className='avatar'>
      <img src={user.icon ? user.icon : ""} alt={`Avatar de ${user.name}`} className='avatar__img' />
    </div>
  )
}
