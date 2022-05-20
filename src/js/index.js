//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let digitOne = 0;
setInterval(function () {
	digitOne += 1;
	let six = digitOne / 100000;
	/* let five = Math.floor(digitOne / 10000);
	let four = Math.floor(digitOne / 1000);
	let three = Math.floor(digitOne / 100);
	let two = Math.floor(digitOne / 10);
	let one = Math.floor(digitOne); */
	/* 	timeArray.push(one);
	timeArray.push(two);
	timeArray.push(three);
	timeArray.push(four);
	timeArray.push(five); */
	let timeArray = six.toFixed(6).replace(".", "").split("");
	ReactDOM.render(
		<SecondsCounter time={timeArray} />,
		document.querySelector("#app")
	);
}, 1000);
