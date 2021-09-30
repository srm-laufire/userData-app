import Remote from '../services/remote';

const UserManager = {
	add: ({ state: { users }, data: user }) =>
		users.concat(user),

	remove: ({ state: { users }, data: current }) =>
		users.filter((user) => user.id !== current.id),

	isEmpty: ({ state: { name, age }}) =>
		name === '' || age === '',

	remoteCall: (context) =>
		UserManager.isEmpty(context) && Remote.createUser(context),
};

export default UserManager;
