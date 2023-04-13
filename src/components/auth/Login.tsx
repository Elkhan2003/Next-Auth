import React, { FC } from "react";
import Head from "next/head";
import scss from "./Auth.module.scss";
import Image from "next/image";
import devx_logo from "./img/logo.png";
import google_icon from "./img/google_icon.svg";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Login: FC = () => {
	const router = useRouter();
	const { callbackUrl = "/" }: any = router.query;

	const logo: any = devx_logo;
	const google: any = google_icon;

	return (
		<>
			<Head>
				<title>Sign In</title>
			</Head>
			<div className={`${inter.className} ${scss.login__desfaer}`}>
				<div className={scss.style}>
					<Image className={scss.logo} src={logo} alt="DevX Logo" />
					<h1>
						Welcome <span>back</span>
					</h1>
					<div
						className={scss.submit}
						onClick={() => {
							signIn("google", { callbackUrl });
						}}
					>
						<Image src={google} alt="logo" />
						<p>Log in with Google</p>
					</div>
					<p className={scss.documentation}>
						By signing up, you agree to our{" "}
						<a href="#" target="_blank">
							Privacy Policy
						</a>{" "}
						<br />
						and{" "}
						<a href="#" target="_blank">
							Terms of Service
						</a>
						.
					</p>
				</div>
			</div>
		</>
	);
};
export default Login;
