import * as actionType from "../Constants/ElectronicsConstants";

export const getElectronicsReducer = (state = { electronics: [] }, action) => {
  switch (action.type) {
    case actionType.GET_ELECTRONICS_SUCCESS:
      return { electronics: action.payload };
    case actionType.GET_ELECTRONICS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const getElectronicsDetailsReducer = (
  state = { electronics: {} },
  action
) => {
  switch (action.type) {
    case actionType.GET_ELECTRONICS_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_ELECTRONICS_DETAILS_SUCCESS:
      return { loading: false, electronics: action.payload };
    case actionType.GET_ELECTRONICS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionType.GET_ELECTRONICS_DETAILS_RESET:
      return { electronics: {} };
    default:
      return state;
  }
};
