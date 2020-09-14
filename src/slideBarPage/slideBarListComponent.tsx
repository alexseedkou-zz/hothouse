import * as React from "react";
import { Dispatch } from "redux";
import { RootAction } from "src/store/root.actions";
import { SlideBarComponentContainer } from "./slideBar.component";
import {
	confirmSlideBarValue,
	ISlideBar,
	ISlideBarList,
} from "./slideBarPage.action";
import { connect } from "react-redux";
import store from "../store/root.store";
import { confirmStatusSelector, barValuesSelector } from "./slideBar.reducer";

export interface IProps {
	listOfSlideBar: ISlideBarList;
  confirm: (bars: ISlideBar[]) => void;
  isConfirmed: boolean;
  submitList: ISlideBar[];
}

// export interface IState {
//   isConfirmed: boolean;
// }

class SlideBareListComponent extends React.PureComponent<IProps, any> {
	public render() {
		const handleOnConfirm = (event: React.MouseEvent<HTMLElement>) => {
			this.props.confirm(
				this.props.listOfSlideBar.listOfslideValueWithName
			);
		};
		return (
			<>
				<div>
					{this.props.listOfSlideBar.listOfslideValueWithName.map(
						(slideBar, index) => (
							<SlideBarComponentContainer
								barName={slideBar.name}
								key={index}
								index={index}
							/>
						)
					)}
				</div>
				{this.props.isConfirmed ? (
					<div>
						Confirmed with values{" "}
						{
              this.props.submitList[0].vaule
						}
					</div>
				) : (
					<button onClick={handleOnConfirm}>Confirm</button>
				)}
			</>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
	confirm: (bars: ISlideBar[]) =>
		dispatch(confirmSlideBarValue({ listOfslideValueWithName: bars })),
});

const mapStateToProps = (state = store.getState()) => {
	return {
		isConfirmed: confirmStatusSelector(state.slideBarReducer),
		submitList: barValuesSelector(state.slideBarReducer),
	};
};

export const SlideBareListComponentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SlideBareListComponent);
