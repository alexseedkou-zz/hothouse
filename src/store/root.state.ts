import { StateType } from "typesafe-actions";
import { IQuestionListState, IQuestionState } from "../initialQuestionPage/question.action";

export type RootState = StateType<IQuestionListState>;
