import React, { useState } from "react";

//include images into your bundle

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="rectangule">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"red" + (selectedColor === "red" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>

			<div
				onClick={() => setSelectedColor("green")}
				className={
					"green" + (selectedColor === "green" ? " glow" : "")
				}></div>
		</div>
	);
};

export default Home;
