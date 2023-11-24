import { ActionTYPES } from "./ActionTypes"
export const initialState = {
  cart: [],
  viewCart: false,
  filters: ""
} 
export function ProductsReducer(state, action){
  switch (action.type) {
    case ActionTYPES.ADD_TO_CART: {
      const sortArray = [...state.cart, action.payload]
      return {
        ...state,
        cart: sortArray
      };
    }
    case ActionTYPES.DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id.creationTime !== action.payload)
      }
    }

    case ActionTYPES.DELETE_ALL_FROM_CART: {
      return action.payload;
    }

    case ActionTYPES.CALCULATE_PRICE_FINAL: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
      }
    }
    case ActionTYPES.CHANGE_STATE_VIEW_FROM_CART: {
      return {
        ...state, viewCart: action.payload
      }
    }
    case ActionTYPES.ADD_MORE_THE_SAME_PRODUCT: {
      const [productToMore] = state.cart.filter(product=> product.id.creationTime == action.payload.id)
      productToMore.cantidad += parseInt(action.payload.cantidad)
      
      return {
        ...state, cart: [...state.cart]
      }
    }
    case ActionTYPES.SET_FILTER: {
      return {
        ...state, filters: action.payload
      }
    }
    default:{
      return state;
    }
  }
  throw new Error("Accion desconocida: " + action.type)
}