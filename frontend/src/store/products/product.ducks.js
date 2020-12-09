import { createActions, createReducer } from "reduxsauce"

export const { Types: ProductTypes, Creators: ProductActions } = createActions({
  productsList: [""],
  productDetails: ["id"],
})

const INITIAL_STATE = {
  loading: false,
  products: [],
  product: {},
}

const productsList = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductTypes.LIST_REQUEST:
      return { loading: true, products: [] }
    case ProductTypes.LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case ProductTypes.LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

const productDetails = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case ProductTypes.DETAILS_REQUEST:
      return { loading: true, ...state }
    case ProductTypes.DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case ProductTypes.DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default createReducer(INITIAL_STATE, {
  [ProductTypes.LIST_PRODUCTS]: productsList,
  [ProductTypes.LIST_PRODUCTS_DETAILS]: productDetails,
})
