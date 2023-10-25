import React, { useReducer } from 'react'
import { ProductsContext } from './productsContext'
import { ProductsReducer, initialState } from './ProductsReducer'
import { ActionTYPES } from './ActionTypes'
import allUsers from "../utils/datafake/users.json"

export function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  //FUNCIONES DE LOS USUARIOS
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
  //FUNCIONES DEL CARRITO
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      cantidad: 1
    }
    const filterProduct = state.cart.filter(product1 => product1.id == newProduct.id)
    console.log(filterProduct)
    if (product && filterProduct.length == 0) {
      dispatch({
        type: ActionTYPES.ADD_TO_CART,
        payload: newProduct
      })
    } else {
      //cambiar por el cambio en la ui
      console.log("Ya esta agregado")
    }
  }
  const addMoreProductToCart = (id, cantidad) => {
    dispatch({
      type: ActionTYPES.ADD_MORE_THE_SAME_PRODUCT,
      payload: { id, cantidad }
    })
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
        getUser, addProductToCart,
        changeViewFromCart, addMoreProductToCart
      }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}
