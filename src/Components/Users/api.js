import axios from "axios";

let URL = "http://localhost:7000/api";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${URL}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};
export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${URL}/login`, user);
  } catch (error) {
    console.log("error while calling login API: ", error);
    return error.response;
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${URL}/get-product-by-id/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
