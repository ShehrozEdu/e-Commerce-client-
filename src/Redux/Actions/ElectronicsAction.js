import axios from "axios";

import * as actionTypes from "../Constants/ElectronicsConstants";
const URL = "https://flipkart-clone-532.herokuapp.com";
export const getElectronics = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/get-electronics`);
    console.log(data);
    dispatch({ type: actionTypes.GET_ELECTRONICS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ELECTRONICS_FAIL,
      payload: error.message,
    });
  }
};
export const getElectronicsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ELECTRONICS_DETAILS_REQUEST });
    let { data } = await axios.get(`${URL}/get-electronics-by-id/${id}`);
    // console.log(data);
    dispatch({
      type: actionTypes.GET_ELECTRONICS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ELECTRONICS_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
