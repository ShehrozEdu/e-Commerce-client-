import axios from "axios";
import * as actionType from "../Constants/CartConstants";
const URL = "http://localhost:7000/api";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/get-electronics-by-id/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({
      type: actionType.ADD_TO_CART_ERROR,
      payload: error.message,
    });
  }
};
export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};
