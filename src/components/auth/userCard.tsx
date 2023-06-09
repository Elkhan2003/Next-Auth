import React, { FC } from "react";
import { DefaultSession } from "next-auth";

interface UserCardProps {
	user?: DefaultSession["user"];
}

const UserCard: FC<UserCardProps> = ({ user }) => {
	const avatarUrl: any = user?.image;

	return (
		<div className="card">
			<div className="card-body">
				<p>Current Logged In User</p>
				<img src={avatarUrl} alt="Avatar" />
				<h5 className="card-title">{user?.name}</h5>
				<p className="card-text">{user?.email}</p>
			</div>
		</div>
	);
};

export default UserCard;
