const UserManager = {
	getUser: (
		name, age, gender
	) => ({
		name,
		age,
		gender,
	}),

	add: ({ state: { users, name, age, gender }}) =>
		users.concat(UserManager.getUser(
			name, age, gender
		)),

	isEmpty: ({ state: { name, age, gender }}) =>
		name === '' || age === '' || gender === '',
};

export default UserManager;
