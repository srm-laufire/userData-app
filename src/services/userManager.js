const UserManager = {
	add: ({ users }, user) =>
		users.concat(user),

	remove: ({ state: { users }, data: current }) =>
		users.filter((user) => user.id !== current.id),

	isEmpty: ({ state: { name, age }}) =>
		name === '' || age === '',
};

export default UserManager;
