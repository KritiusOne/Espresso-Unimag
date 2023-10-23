import { ActionTYPES } from "./ActionTypes"
export const initialState = {
  user: {
    username: "",
    password: ""
  },
  cart: []
} 
export function ProductsReducer(state, action){
  switch (action.type) {
    case ActionTYPES.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case ActionTYPES.DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload)
      }
    }

    case ActionTYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case ActionTYPES.CALCULATE_PRICE_FINAL: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
      }
    }
    case ActionTYPES.LOGIN_USER_DATA: {
      return {
        ...state, user: action.payload
      }
    }
    default:{
      return state;
    }
  }
  throw new Error("Accion desconocida: " + action.type)
}