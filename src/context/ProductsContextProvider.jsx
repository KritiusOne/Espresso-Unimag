import React, { useReducer } from 'react'
import { ProductsContext } from './productsContext'
import { ProductsReducer, initialState } from './ProductsReducer'
import { ActionTYPES } from './ActionTypes'
import allUsers from "../utils/datafake/users.json"

export function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState)
  const getUser = (username, password) => {
    const [user] = allUsers.filter(user => username == user.email && password == user.password)
    if (user) {
      dispatch({
        type: ActionTYPES.LOGIN_USER_DATA,
        payload: user
      })
    } else {
      //usuario o contraseña incorrectos
    }
  }
  const addProductToCart = (product) => {
    if (product && !state.cart.includes(product)) {
      dispatch({
        type: ActionTYPES.ADD_TO_CART,
        payload: product
      })
    } else {
      //cambiar por el cambio en la ui
      console.log("Ya esta agregado")
    }
  }
  const changeViewFromCart = (value) => {
    dispatch({
      type: ActionTYPES.CHANGE_STATE_VIEW_FROM_CART,
      payload: value
    })
  }
  return (
    <ProductsContext.Provider value={
      {
        cart: state.cart,
        user: state.user,
        viewCart: state.viewCart,
        getUser, addProductToCart, changeViewFromCart
      }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}
