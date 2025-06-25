import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Product reducers
import { 
  getProductReducer, 
  getProductDetailsReducer,
  getProductsByCategoryReducer,
  getFashionProductsReducer,
  getDealProductsReducer,
  getFeaturedProductsReducer,
  getProductCategoriesReducer
} from "../Reducer/getProductReducer";

// Electronics reducers
import { getElectronicsReducer, getElectronicsDetailsReducer } from "../Reducer/getElectronicsReducer";

// Cart reducers
import { cartReducer } from "../Reducer/cartReducer";
import { ElectronicsCartReducer } from "../Reducer/ElectronicsCartReducer";

// User reducers
import { userLoginReducer, userRegisterReducer } from "../Reducer/UserReducer";

const reducer = combineReducers({
  // Product states
  getProduct: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  getProductsByCategory: getProductsByCategoryReducer,
  getFashionProducts: getFashionProductsReducer,
  getDealProducts: getDealProductsReducer,
  getFeaturedProducts: getFeaturedProductsReducer,
  getProductCategories: getProductCategoriesReducer,
  
  // Electronics states
  getElectronics: getElectronicsReducer,
  getElectronicsDetails: getElectronicsDetailsReducer,
  
  // Cart states
  cart: cartReducer,
  electronicsCart: ElectronicsCartReducer,
  
  // User states
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
