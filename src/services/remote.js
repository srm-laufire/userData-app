import axios from 'axios';

const Remote = {
	fetchUsers: async ({ config, actions }) => {
		const results = await axios.get(config.localHostURL);

		actions.setUsers(results.data);
	},

	createUser: async ({ config, state: { name, age, gender }, actions }) => {
		actions
			.addUser((await axios.post(config.localHostURL, {
				name,
				age,
				gender,
			})).data);
	},

	removeUser: async ({ config, data, actions }) => {
		const result = await axios.delete(`${ config.localHostURL }${ data.id }`);

		result && actions.removeUser(data);
	},
};

export default Remote;
