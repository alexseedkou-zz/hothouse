import update from "immutability-helper";
import { getType } from "typesafe-actions";
import { listOfQuestions } from "../../dataExample";
import {
	IQuestionListState,
	IQuestionState,
	QuestionTypes,
	selectQuestion,
	unselectQuestion,
} from "./question.action";

const initialState: IQuestionListState = listOfQuestions;

export function questionReducer(
	state = initialState,
	action: QuestionTypes
): IQuestionListState {
	let newState;
	switch (action.type) {
		case getType(selectQuestion):
			newState = update(state, {
				questions: {
					[action.payload.index]: {
						selected: { $set: true },
					},
				},
				curSelectedIndex: { $set: action.payload.index },
			});

			return newState;

		case getType(unselectQuestion):
			newState = update(state, {
				questions: {
					[action.payload.index]: {
						selected: { $set: false },
					},
				},
			});

			return newState;

		default:
			return state;
	}
}

export const selectQuestionSelector = (
	state: IQuestionState[],
	index: number
) => {
	if (state.length > 0 && index >= 0) {
		return state[index].selected;
	}
};

// export const curSelectedQuestoinSelector = (state: IQuestionListState) => {
// 	return state.curSelectedIndex;
// };
