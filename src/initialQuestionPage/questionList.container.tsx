import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootAction } from "../store/root.actions";
import {
	IQuestionListState,
	selectQuestion,
	unselectQuestion,
} from "./question.action";
import { SingleQuestionComponentContainier } from "./question.component";

import store from "../store/root.store";
import { curSelectedQuestoinSelector } from "./question.reducer";


export interface IProps {
	questionList: IQuestionListState;
	select: (index: number) => void;
	unselect: (index: number) => void;
}

export class QuestionListComponent extends React.PureComponent<IProps> {
	public render() {
		return (
			<div className="questionList">
				{this.props.questionList.questions.map((question, index) => (
					<SingleQuestionComponentContainier
						questionText={question.question}
						selected={question.selected}
						index={index}
						key={index}
						selectQuestion={this.props.select}
						unselectQuestion={this.props.unselect}
					/>
				))}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
	select: (index: number) => {
		const curIndex = curSelectedQuestoinSelector(store.getState().questionReducer);
		if (curIndex !== -1 && curIndex !== index) {
			dispatch(unselectQuestion({ index: curIndex }));
		}
		dispatch(selectQuestion({ index }));
	},
	unselect: (index: number) => dispatch(unselectQuestion({ index })),
});


export const QuestionListComponentContainer = connect(
	undefined,
	mapDispatchToProps
)(QuestionListComponent);
