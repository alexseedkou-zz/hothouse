import { StateType } from "typesafe-actions";
import { IQuestionListState, IQuestionState } from "../initialQuestionPage/question.action";
import { ISlideBarList } from "src/slideBarPage/slideBarPage.action";

export type RootState = StateType<IQuestionListState> | StateType<ISlideBarList>;
