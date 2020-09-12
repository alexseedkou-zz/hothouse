import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { questionReducer } from "../initialQuestionPage/question.reducer";

const rootReducer = (history: History<any>) =>
	combineReducers({ router: connectRouter(history), questionReducer });

export default rootReducer;