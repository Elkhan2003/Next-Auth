import React, { FC, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "./userCard";

const Logout: FC = () => {
	const { data: session, status } = useSession();

	// redirect to sign-in page if user is not authenticated
	useEffect(() => {
		if (status === "loading") return; // do nothing while loading
		if (!session) {
			signIn();
		}
	}, [status, session]);

	// if the user exists -> show a Sign Out button and their information
	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign Out of Google</button>
				<UserCard user={session?.user} />
			</>
		);
	}
	return null; // or return an empty JSX element
};
export default Logout;
