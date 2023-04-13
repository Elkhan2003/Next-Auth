import React, { FC } from "react";
import { DefaultSession } from "next-auth";

interface UserCardProps {
	user: DefaultSession["user"];
}

const UserCard: FC<UserCardProps> = ({ user }) => {
	return (
		<div className="card">
			<div className="card-body">
				<p>Current Logged In User</p>
				<h5 className="card-title">{user?.name}</h5>
				<img src={user?.image} alt="user" />
				<p className="card-text">{user?.email}</p>
			</div>
		</div>
	);
};

export default UserCard;
