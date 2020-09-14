import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { questionReducer } from "../initialQuestionPage/question.reducer";
import { slideBarReducer } from "../slideBarPage/slideBar.reducer";

const rootReducer = (history: History<any>) =>
	combineReducers({
		questionReducer,
		router: connectRouter(history),
		slideBarReducer
	});

export default rootReducer;