import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetchUsers: async () => {
		const results = await axios.get('http://localhost:7000/');

		context.actions.updateUsers(results.data);
	},

	createUser: async ({ state: { name, age, gender }}) => {
		(name !== '' || age !== '' || gender !== '')
			&& context.actions
				.addUser((await axios.post('http://localhost:7000/', {
					name,
					age,
					gender,
				})).data);
	},
};

export default Remote;
