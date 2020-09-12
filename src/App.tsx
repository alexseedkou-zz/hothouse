import * as React from "react";
import { listOfQuestions } from "../dataExample";
import { QuestionListComponentContainer } from "./initialQuestionPage/questionList.container";



export const App: React.FC<{}> = () => {
	return (
		<>
			<QuestionListComponentContainer questionList={listOfQuestions} />
		</>
	);
};
