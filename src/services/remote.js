import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetchUsers: async () => {
		const results = await axios.get('http://localhost:7000/');

		// eslint-disable-next-line no-console
		console.log(results);

		context.actions.updateUsers(results.data);
	},
};

export default Remote;
