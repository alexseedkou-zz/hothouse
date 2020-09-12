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
	// select: (index: number) => {
	// 	const curIndex = ownProps.questionList.curSelectedIndex;
	// 	if (curIndex !== -1 && curIndex !== index) {
	// 		dispatch(unselectQuestion({ index: curIndex }));
	// 	}
	// 	dispatch(selectQuestion({ index }));
	// },
	select: (index: number) => dispatch(selectQuestion({ index })),
	unselect: (index: number) => dispatch(unselectQuestion({ index })),
});

// const mapStateToProps = (state = store.getState(), ownProps: IProps) => {
// 	return {
// 		curSelectedIndex: curSelectedQuestoinSelector(state.questionReducer),
// 	};
// };

// const mergeProps =
// 	(stateProps = mapStateToProps, dispatchProps = mapDispatchToProps, ownProps: IProps) => {
// 		return {
// 			...stateProps,
// 			...dispatchProps,
// 			onChange: (index: number) => (
// 				dispatchProps
// 			)
// 		};
// 	}

export const QuestionListComponentContainer = connect(
	undefined,
	mapDispatchToProps
)(QuestionListComponent);
