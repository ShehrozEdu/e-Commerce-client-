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
  }
};