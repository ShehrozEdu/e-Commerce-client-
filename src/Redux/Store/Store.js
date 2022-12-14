import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductReducer,
  getProductDetailsReducer,
} from "../Reducer/getProductReducer";
import {
  getElectronicsReducer,
  getElectronicsDetailsReducer,
} from "../Reducer/getElectronicsReducer";
import { cartReducer } from "../Reducer/cartReducer";
import { ElectronicsCartReducer } from "../Reducer/ElectronicsCartReducer";

const reducer = combineReducers({
  getProduct: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  getElectronics: getElectronicsReducer,
  getElectronicsDetails: getElectronicsDetailsReducer,
  cart: cartReducer,
  electronicsCart: ElectronicsCartReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
