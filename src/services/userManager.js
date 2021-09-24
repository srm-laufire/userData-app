const UserManager = {
	add: ({ users }, user) =>
		users.concat(user),

	remove: ({ state: { users }, data: current }) =>
		users.filter((user) => user.id !== current.id),

	isEmpty: ({ state: { name, age, gender }}) =>
		name === '' || age === '' || gender === '',
};

export default UserManager;
