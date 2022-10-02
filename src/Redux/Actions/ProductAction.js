import axios from "axios";

import * as actionTypes from "../Constants/ProductConstants";
const URL = "https://flipkart-clone-532.herokuapp.com/api";
export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/get-products`);
    // console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};
export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    let { data } = await axios.get(`${URL}/get-product-by-id/${id}`);
    // console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
