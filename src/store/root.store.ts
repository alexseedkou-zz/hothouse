
import { createBrowserHistory } from "history";
import { createStore } from "redux";
import rootReducer from "./root.reducers";

const initialState = {};

export const history = createBrowserHistory();

const store = createStore(rootReducer(history), initialState);

export default store;
