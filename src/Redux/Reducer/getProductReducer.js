import * as actionType from "../Constants/ProductConstants";

export const getProductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case action.GET_PRODUCT_SUCCESS:
      return { product: action.payload };
    case action.GET_PRODUCT_FAIL:
      return { product: action.payload };
    default:
      return state;
  }
};
