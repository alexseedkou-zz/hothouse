import update from "immutability-helper";
import { getType } from "typesafe-actions";
import {
	confirmSlideBarValue,
	ISlideBarList,
	SlideBarTypes,
	barValueChange,
} from "./slideBarPage.action";
import { listOfBars } from "../../dataExample";

const initialState: ISlideBarList = listOfBars;

export function slideBarReducer(
	state = initialState,
	action: SlideBarTypes
): ISlideBarList {
	let newState;
	switch (action.type) {
		case getType(confirmSlideBarValue):
			newState = update(state, { isConfirmed: { $set: true } });
			return newState;
		case getType(barValueChange):
			newState = update(state, {
				listOfslideValueWithName: {
					[action.payload.index]: {
						vaule: { $set: action.payload.value },
					},
				},
			});
			return newState;
		default:
			return state;
	}
}

export const confirmStatusSelector = (state: ISlideBarList) => {
	return state.isConfirmed;
};

export const barValuesSelector = (state:ISlideBarList) => {
  return state.listOfslideValueWithName;
}
