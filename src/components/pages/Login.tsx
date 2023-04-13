import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
	const { data: session, status } = useSession();

	useEffect(() => {
		if (status === "loading") return; // do nothing while loading
		if (!session) {
			signIn();
		}
	}, [status, session]);

	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign Out of Google</button>
				<UserCard user={session?.user} />
			</>
		);
	}
}
