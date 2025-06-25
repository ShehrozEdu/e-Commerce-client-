import axios from "axios";

import * as actionTypes from "../Constants/ProductConstants";
const URL = "http://localhost:7000/api";
export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/get-products`);
    // console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
  }
};

// Get products by category
export const getProductsByCategory = (category, limit, featured) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_BY_CATEGORY_REQUEST });
    
    let url = `${URL}/products/category/${category}`;
    const params = new URLSearchParams();
    
    if (limit) params.append('limit', limit);
    if (featured) params.append('featured', featured);
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    let { data } = await axios.get(url);
    dispatch({ 
      type: actionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS, 
      payload: data.products,
      category: data.category 
    });
  } catch (error) {
    dispatch({ 
      type: actionTypes.GET_PRODUCTS_BY_CATEGORY_FAIL, 
      payload: error.message 
    });
  }
};

// Get fashion products for homepage (dedicated slice)
export const getFashionProducts = (limit) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_FASHION_PRODUCTS_REQUEST });
    
    let url = `${URL}/products/category/fashion`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    
    let { data } = await axios.get(url);
    dispatch({ 
      type: actionTypes.GET_FASHION_PRODUCTS_SUCCESS, 
      payload: data.products 
    });
  } catch (error) {
    dispatch({ 
      type: actionTypes.GET_FASHION_PRODUCTS_FAIL, 
      payload: error.message 
    });
  }
};

// Get deal products (featured items across categories)
export const getDealProducts = (limit) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DEAL_PRODUCTS_REQUEST });
    
    let url = `${URL}/products/deals`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    
    let { data } = await axios.get(url);
    dispatch({ 
      type: actionTypes.GET_DEAL_PRODUCTS_SUCCESS, 
      payload: data.products 
    });
  } catch (error) {
    dispatch({ 
      type: actionTypes.GET_DEAL_PRODUCTS_FAIL, 
      payload: error.message 
    });
  }
};

// Get featured products
export const getFeaturedProducts = (limit) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_FEATURED_PRODUCTS_REQUEST });
    
    let url = `${URL}/products/featured`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    
    let { data } = await axios.get(url);
    dispatch({ 
      type: actionTypes.GET_FEATURED_PRODUCTS_SUCCESS, 
      payload: data.products 
    });
  } catch (error) {
    dispatch({ 
      type: actionTypes.GET_FEATURED_PRODUCTS_FAIL, 
      payload: error.message 
    });
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

// Get product categories
export const getProductCategories = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_CATEGORIES_REQUEST });
    let { data } = await axios.get(`${URL}/products/categories`);
    dispatch({ 
      type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS, 
      payload: data.categories 
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};
