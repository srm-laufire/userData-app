import React from 'react';
import User from './user';

const Users = ({ state: { users }}) =>
	<div role="users">
		{ users.map(User) }
	</div>;

export default Users;
