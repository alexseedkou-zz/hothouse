import { IQuestionListState } from "./src/initialQuestionPage/question.action";

export const listOfQuestions: IQuestionListState = {
	curSelectedIndex: -1,
	questions: [
		{ question: "Yes", selected: false },
		{ question: "No", selected: false },
	],
};
