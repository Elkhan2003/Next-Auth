import React, { FC } from "react";
import Logout from "../auth/Logout";

const HomePage: FC = () => {
	return (
		<div style={{ width: "500px", margin: "0 auto", paddingTop: "30px" }}>
			<h3>Login Website</h3>
			<Logout />
		</div>
	);
};
export default HomePage;
