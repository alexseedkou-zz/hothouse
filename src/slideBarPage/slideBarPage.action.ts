import { ActionType, createStandardAction } from "typesafe-actions";

export interface ISlideBar {
	name?: string;
	vaule: number;
}

export interface ISlideBarList {
	listOfslideValueWithName: ISlideBar[];
	isConfirmed: boolean;
}

export const confirmSlideBarValue = createStandardAction(
	"@CONFIRM_SLIDE_VALUE"
)<{
	listOfslideValueWithName: ISlideBar[];
}>();

export const barValueChange = createStandardAction("@CHANGE_SLIDE_VALUE")<{
  index: number,
  value: number,
  name?: string,
}>();
export type SlideBarTypes =
	| ActionType<typeof confirmSlideBarValue>
	| ActionType<typeof barValueChange>;
