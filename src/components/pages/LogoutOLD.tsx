import { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "../auth/userCard";

const Logout: FC = () => {
	// get session from nextAuth
	const { data: session } = useSession();
	console.log(session);
	// useSession uses React Context

	// if the user exists -> show a Sign Out button and their information
	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign Out of Google</button>
				{/* Pass session info to server component */}
				<UserCard user={session?.user} />
			</>
		);
	} else {
		return (
			<>
				<button
					onClick={() => signIn()}
					type="button"
					className="btn btn-primary"
				>
					Sign In with Google
				</button>
			</>
		);
	}

	// if a user doesn't exist -> show a Sign In button
};
export default Logout;
