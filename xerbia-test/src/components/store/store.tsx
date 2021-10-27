import { createStore } from "redux";
import rootReducer from "./index";

const Store = createStore(rootReducer);

export default Store;
