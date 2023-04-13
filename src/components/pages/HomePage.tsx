import React, { FC } from "react";
import Login from "./Login";

// localhost:3000

const Home: FC = () => {
	return (
		<div style={{ width: "500px", margin: "0 auto", paddingTop: "30px" }}>
			<h3>Login Website</h3>
			<Login />
		</div>
	);
};
export default Home;
