import * as React from "react";
import { listOfQuestions, listOfBars } from "../dataExample";
import { QuestionListComponentContainer } from "./initialQuestionPage/questionList.container";
import {} from "./slideBarPage/slideBar.component";
import { SlideBareListComponentContainer } from "./slideBarPage/slideBarListComponent";

export const App: React.FC<{}> = () => {
	return (
		<>
			<QuestionListComponentContainer questionList={listOfQuestions} />
			<SlideBareListComponentContainer listOfSlideBar={listOfBars} />
		</>
	);
};
