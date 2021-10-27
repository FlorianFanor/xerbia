import { combineReducers } from "redux";
import CartReducer from "../reducers/CartReducer";

const appReducer = combineReducers({
  CartReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
