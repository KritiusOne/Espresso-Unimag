import React, { useReducer } from 'react'
import { ProductsContext } from './productsContext'
import { ProductsReducer, initialState } from './ProductsReducer'
import { ActionTYPES } from './ActionTypes'

export function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  //FUNCIONES DEL CARRITO
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      cantidad: 1
    }
    const filterProduct = state.cart.filter(product1 => product1.id == newProduct.id)
    if (product && filterProduct.length == 0) {
      dispatch({
        type: ActionTYPES.ADD_TO_CART,
        payload: newProduct
      })
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
  const deleteProductOnCart = (id) => {
    dispatch({
      type: ActionTYPES.DELETE_FROM_CART,
      payload: id
    })
  }
  const deleteAllProductsOnCart = () => {
    dispatch({
      type: ActionTYPES.DELETE_ALL_FROM_CART,
      payload: initialState
    })
  }
  /* FUNCIONES DE LOS FILTROS */
  const setFilterName = (filter) => {
    dispatch({
      type: ActionTYPES.SET_FILTER,
      payload: filter
    })
  }
  return (
    <ProductsContext.Provider value={
      {
        cart: state.cart,
        viewCart: state.viewCart,
        filters: state.filters, setFilterName,
        addProductToCart,
        changeViewFromCart, addMoreProductToCart,
        deleteProductOnCart, deleteAllProductsOnCart
      }}>
      {
        children
      }
    </ProductsContext.Provider>
  )
}
