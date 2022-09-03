import axios from "axios";

import * as actionTypes from "../Constants/ProductConstants";
const URL = "http://localhost:7000/api";
export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/get-products`);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};
export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    let { data } = await axios.get(`${URL}/get-products/${_id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
