import axios from 'axios';
import config from '../core/config';
import context from '../core/context';

const Remote = {
	fetchUsers: async () => {
		const results = await axios.get(config.localHostURL);

		context.actions.setUsers(results.data);
	},

	createUser: async ({ state: { name, age, gender }}) => {
		context.actions
			.addUser((await axios.post(config.localHostURL, {
				name,
				age,
				gender,
			})).data);
	},

	removeUser: async (user) => {
		const result = await axios.delete(`${ config.localHostURL }${ user.id }`);

		result && context.actions.removeUser(user);
	},
};

export default Remote;
