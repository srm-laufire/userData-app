const UserManager = {
	add: ({ users }, user) =>
		users.concat(user),

	isEmpty: ({ state: { name, age, gender }}) =>
		name === '' || age === '' || gender === '',
};

export default UserManager;
