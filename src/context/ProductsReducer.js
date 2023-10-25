import { ActionTYPES } from "./ActionTypes"
export const initialState = {
  user: {
    username: "",
    password: ""
  },
  cart: [],
  viewCart: false
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
    case ActionTYPES.CHANGE_STATE_VIEW_FROM_CART: {
      return {
        ...state, viewCart: action.payload
      }
    }
    case ActionTYPES.ADD_MORE_THE_SAME_PRODUCT: {
      const [productToMore] = state.cart.filter(product=>product.id == action.payload.id)
      productToMore.cantidad += parseInt(action.payload.cantidad)
      return {
        ...state, cart: [...state.cart, productToMore]
      }
    }
    default:{
      return state;
    }
  }
  throw new Error("Accion desconocida: " + action.type)
}