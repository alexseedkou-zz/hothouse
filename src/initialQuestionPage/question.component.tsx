import * as React from "react";
import { connect } from "react-redux";
import store from "../store/root.store";
import "./question.component.style.css";
import { selectQuestionSelector } from "./question.reducer";

interface IProps {
	questionText: string;
	selected: boolean;
	index: number;
	selectQuestion: (index: number) => void;
	unselectQuestion: (index: number) => void;
}


export class SingleQuestionComponent extends React.Component<IProps> {
	public render() {
		const handleOnSelect = (event: React.MouseEvent<HTMLElement>) => {
			this.props.selectQuestion(this.props.index);
		};
		const handleOnUnSelect = (event: React.MouseEvent<HTMLElement>) => {
			this.props.unselectQuestion(this.props.index);
		};
		return (
			<>
				<div className="questionButton">
					<div className="questionText">
						{this.props.questionText}
					</div>
					{this.props.selected ? (
						<button
							className="questionMark"
							onClick={handleOnUnSelect}
						>
							isSelected
						</button>
					) : (
						<button
							className="questionMark"
							onClick={handleOnSelect}
						>
							notSelected
						</button>
					)}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state = store.getState(), ownProps: IProps) => {
	return {
		selected: selectQuestionSelector(
			state.questionReducer.questions,
			ownProps.index
		),
	};
};



export const SingleQuestionComponentContainier = connect(
			mapStateToProps,
		)(SingleQuestionComponent);
