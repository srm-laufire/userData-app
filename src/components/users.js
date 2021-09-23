import React from 'react';
import User from './user';

const Users = (context) => {
	const { state: { users }} = context;

	return <div role="users">
		{ users.map(User) }
	</div>;
};

export default Users;
