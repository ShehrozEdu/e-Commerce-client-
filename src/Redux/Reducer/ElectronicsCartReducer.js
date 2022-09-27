import * as actionType from "../Constants/CartConstants";

export const ElectronicsCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find(
        (electronics) => electronics._id === item._id
      );

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.electronics === exist.electronics ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (electronics) => electronics._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
