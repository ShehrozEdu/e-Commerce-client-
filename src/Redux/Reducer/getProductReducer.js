import * as actionTypes from "../Constants/ProductConstants";

// Get all products reducer
export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

// Get product details reducer
export const getProductDetailsReducer = (
  state = { product: {}, loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };
    default:
      return state;
  }
};

// Get products by category reducer
export const getProductsByCategoryReducer = (
  state = { products: [], loading: false, category: null },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { 
        loading: false, 
        products: action.payload, 
        category: action.category 
      };
    case actionTypes.GET_PRODUCTS_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload, products: [] };
    case actionTypes.GET_PRODUCTS_BY_CATEGORY_RESET:
      return { products: [], loading: false, category: null };
    default:
      return state;
  }
};

// Get fashion products reducer (dedicated for homepage)
export const getFashionProductsReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_FASHION_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_FASHION_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case actionTypes.GET_FASHION_PRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: [] };
    case actionTypes.GET_FASHION_PRODUCTS_RESET:
      return { products: [], loading: false };
    default:
      return state;
  }
};

// Get deal products reducer
export const getDealProductsReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_DEAL_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_DEAL_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case actionTypes.GET_DEAL_PRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: [] };
    case actionTypes.GET_DEAL_PRODUCTS_RESET:
      return { products: [], loading: false };
    default:
      return state;
  }
};

// Get featured products reducer
export const getFeaturedProductsReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_FEATURED_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_FEATURED_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case actionTypes.GET_FEATURED_PRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: [] };
    case actionTypes.GET_FEATURED_PRODUCTS_RESET:
      return { products: [], loading: false };
    default:
      return state;
  }
};

// Get product categories reducer
export const getProductCategoriesReducer = (
  state = { categories: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case actionTypes.GET_PRODUCT_CATEGORIES_FAIL:
      return { loading: false, error: action.payload, categories: [] };
    case actionTypes.GET_PRODUCT_CATEGORIES_RESET:
      return { categories: [], loading: false };
    default:
      return state;
  }
};
