import { IQuestionListState } from "./src/initialQuestionPage/question.action";
import { ISlideBar, ISlideBarList } from "src/slideBarPage/slideBarPage.action";

export const listOfQuestions: IQuestionListState = {
	curSelectedIndex: -1,
	questions: [
		{ question: "Yes", selected: false },
		{ question: "No", selected: false },
	],
};

export const listOfBars: ISlideBarList = {
			isConfirmed: false,
			listOfslideValueWithName: [
				{ name: "weight", vaule: 0 },
				{ name: "height", vaule: 0 },
			],
		};
