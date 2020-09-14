import * as React from "react";
import { Handles, Rail, Slider, Ticks, Tracks } from "react-compound-slider";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootAction } from "src/store/root.actions";
import store from "../store/root.store";
import "./slideBar.component.style.css";
import { barValueChange, confirmSlideBarValue } from "./slideBarPage.action";

interface IProps {
	barName?: string;
	index: number;
}


export function Track({ source, target, getTrackProps}) {
	return (
		<div
			style={{
				position: "absolute",
				height: 10,
				zIndex: 1,
				marginTop: 35,
				backgroundColor: "#546C91",
				borderRadius: 5,
				cursor: "pointer",
				left: `${source.percent}%`,
				width: `${target.percent - source.percent}%`,
			}}
		/>
	);
}

export function Handle({ handle: { id, value, percent }, getHandleProps }) {
	return (
		<div
			style={{
				left: `${percent}%`,
				position: "absolute",
				marginLeft: -15,
				marginTop: 25,
				zIndex: 2,
				width: 30,
				height: 30,
				border: 0,
				textAlign: "center",
				cursor: "pointer",
				borderRadius: "50%",
				backgroundColor: "#2C4870",
				color: "#333",
			}}
			{...getHandleProps(id)}
		>
			<div style={{ fontFamily: "Roboto", fontSize: 11, marginTop: -35 }}>
				{value}
			</div>
		</div>
	);
}

class SlideBarComponent extends React.PureComponent<IProps, any> {
	public render() {
		const handleChnage = ([getTrackProps, props]) => {
			store.dispatch(
				barValueChange({
					index: this.props.index,
					name: this.props.barName,
					value: getTrackProps,
				})
			);
		};
		// const handleOnSelect = (event: React.MouseEvent<HTMLElement>) => {
		// 	this.props.confirmBarValue({ getTrackProps });
		// };

		return (
			<div>
				{this.props.barName && (
					<div className="barName">{this.props.barName}</div>
				)}
				<Slider
					className="sliderStyle"
					domain={[0, 100]}
					values={[10]}
					onChange={handleChnage}
				>
					<Rail>
						{({ getRailProps }) => (
							<div className="railStyle" {...getRailProps()} />
						)}
					</Rail>
					<Handles>
						{({ handles, getHandleProps }) => (
							<div className="slider-handles">
								{handles.map((handle) => (
									<Handle
										key={handle.id}
										handle={handle}
										getHandleProps={getHandleProps}
									/>
								))}
							</div>
						)}
					</Handles>
					<Tracks right={false}>
						{({ tracks, getTrackProps }) => (
							<div className="slider-tracks">
								{tracks.map(({ id, source, target }) => (
									<>
										<Track
											key={id}
											source={source}
											target={target}
											getTrackProps={getTrackProps}
										/>
									</>
								))}
							</div>
						)}
					</Tracks>
				</Slider>
			</div>
		);
	}
}

export const SlideBarComponentContainer = connect()(SlideBarComponent);
