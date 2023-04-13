import React, { FC } from "react";
import Login from "./Login";

const HomePage: FC = () => {
	return (
		<div style={{ width: "500px", margin: "0 auto", paddingTop: "30px" }}>
			<h3>Login Website</h3>
			<Login />
		</div>
	);
};
export default HomePage;
