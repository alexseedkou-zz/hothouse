import {
	ActionType,
	createStandardAction,
} from "typesafe-actions";

export interface IQuestionState {
	question: string;
	selected: boolean;
}

export interface IQuestionListState {
	questions: IQuestionState[];
	curSelectedIndex: number;
}

export const selectQuestion = createStandardAction("@SELECT_QUESTION")<{
	index: number;
}>();

export const unselectQuestion = createStandardAction("@UNSELECT_QUESTION")<{
	index: number;
}>();


export type QuestionTypes =
	| ActionType<typeof selectQuestion>
	| ActionType<typeof unselectQuestion>;
