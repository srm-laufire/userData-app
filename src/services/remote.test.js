import Remote from './remote';
import context from '../core/context';
import axios from 'axios';
import config from '../core/config';

test('fetchUsers', async () => {
	const { actions } = context;
	const results = {
		data: Symbol('data'),
	};

	jest.spyOn(axios, 'get').mockReturnValue(results);
	jest.spyOn(actions, 'updateUsers');

	await Remote.fetchUsers();

	expect(axios.get).toHaveBeenCalledWith(config.localHostURL);
	expect(actions.updateUsers).toHaveBeenCalledWith(results.data);
});

// eslint-disable-next-line max-lines-per-function
test('createUser', async () => {
	const { actions } = context;
	const state = {
		name: Symbol('name'),
		age: Symbol('age'),
		gender: Symbol('gender'),
	};
	const results = {
		data: Symbol('data'),
	};

	jest.spyOn(axios, 'post').mockReturnValue(results);
	jest.spyOn(actions, 'addUser').mockReturnValue();

	await Remote.createUser({ state });

	expect(axios.post).toHaveBeenCalledWith(config.localHostURL, state);
	expect(actions.addUser).toHaveBeenCalledWith(results.data);
});

test('removeUser', () => {
	const { actions } = context;
	const user = {
		id: 1,
	};
	const expectations = [true, false];

	expectations.forEach(async (returned) => {
		jest.spyOn(axios, 'delete').mockReturnValue(returned);
		jest.spyOn(actions, 'removeUser').mockReturnValue();

		await Remote.removeUser(user);

		expect(axios.delete)
			.toHaveBeenCalledWith(`${ config.localHostURL }${ user.id }`);
		returned && expect(actions.removeUser)
			.toHaveBeenCalledWith(user);
	});
});
