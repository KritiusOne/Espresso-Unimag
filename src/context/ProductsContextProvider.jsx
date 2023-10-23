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
  return (
    <ProductsContext.Provider value={
      {
        cart: state.cart,
        user: state.user,
        getUser
      }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}
