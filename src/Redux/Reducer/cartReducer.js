import * as actionType from "../Constants/CartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find((product) => product._id === item._id);
      // hello testing
      if (exist) {
        exist.quantity++;
        return {
          ...state,
          cartItems: state.cartItems.map((data) => data),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (products) => products._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
