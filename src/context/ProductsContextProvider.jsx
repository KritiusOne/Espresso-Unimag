import React, { useState } from 'react'
import { ProductsContext } from './productsContext'

export function ProductsContextProvider({ children }) {
  const [cart, setCart] = useState({})
  const [user, setUser] = useState({})
  return (
    <ProductsContext.Provider value={
      {
        cart, setCart,
        user, setUser
      }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}
