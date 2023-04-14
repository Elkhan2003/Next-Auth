import React, { FC } from "react";
import Logout from "../auth/Logout";
import Image from "next/image";
import test_imag1 from "@/assets/Screenshot_238.png";
import test_imag2 from "@/assets/test.jpg";

const HomePage: FC = () => {
	const test1: any = test_imag1;
	const test2: any = test_imag2;

	return (
		<div style={{ width: "500px", margin: "0 auto", paddingTop: "30px" }}>
			<h3>Login Website</h3>
			<Logout />
			<Image src={test1} alt={test1} />
			<Image src={test2} alt={test2} />
		</div>
	);
};
export default HomePage;
