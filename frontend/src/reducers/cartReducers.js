import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADRESS,
} from "../constants/cartConstants"

export const cartReducer = (
  state = { cartItems: [], shippingAdress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      const existItem = state.cartItems.find((e) => e.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }

    case CART_SAVE_SHIPPING_ADRESS:
      return {
        ...state,
        shippingAdress: action.payload,
      }
    default:
      return state
  }
}
