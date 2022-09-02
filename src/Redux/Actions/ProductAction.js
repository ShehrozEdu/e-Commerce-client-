import axios from "axios";

import * as actionTypes from "../Constants/ProductConstants";
const URL = "http://localhost:7000/api";
export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/get-products`);
    console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};
