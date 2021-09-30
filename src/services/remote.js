import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetchUsers: async () => {
		const results = await axios.get('http://localhost:7000/');

		context.actions.updateUsers(results.data);
	},

	createUser: async ({ state: { name, age, gender }}) => {
		context.actions
			.addUser((await axios.post('http://localhost:7000/', {
				name,
				age,
				gender,
			})).data);
	},

	removeUser: async (user) => {
		const result = await axios.delete(`http://localhost:7000/${ user.id }`);

		result && context.actions.removeUser(user);
	},
};

export default Remote;
