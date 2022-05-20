import React from "react";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="caja">
			<div className="7">
				<i className="fa-solid fa-clock"></i>
			</div>
			<div className="6">{props.time[0]}</div>
			<div className="5">{props.time[1]}</div>
			<div className="4">{props.time[2]}</div>
			<div className="3">{props.time[3]}</div>
			<div className="2">{props.time[4]}</div>
			<div className="1">{props.time[5]}</div>
		</div>
	);
};
export default SecondsCounter;
