import { combineReducers } from "redux"
import products from "./products/product.ducks"

const appReducer = () =>
  combineReducers({
    products,
  })

export default appReducer
