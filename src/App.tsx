import * as React from "react";

import { ApplicationComponentContainer } from "./application-unit/application.container";
import { listOfAppGroup } from "./data-example";

export const App: React.FC<{}> = () => {
	return (
		<>
			<div className="title" style={{ background: "rgba(255, 255, 255, 1)", width: "100%", height: "54px" }}>
				<img src="../src/images/logo.svg" style={{width: "100px", marginLeft: "100px"}}/>
			</div>
			<ApplicationComponentContainer listOfApplicationGroup={listOfAppGroup} />
		</>
	);
};
