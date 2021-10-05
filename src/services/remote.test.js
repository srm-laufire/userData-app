import axios from 'axios';
import context from '../core/context';
import Remote from './remote';
import { rndBetween } from '@laufire/utils/random';

test('fetchUsers', async () => {
	const { config, actions } = context;
	const results = {
		data: Symbol('data'),
	};

	jest.spyOn(axios, 'get').mockReturnValue(results);
	jest.spyOn(actions, 'setUsers');

	await Remote.fetchUsers({ config, actions });

	expect(axios.get).toHaveBeenCalledWith(config.localHostURL);
	expect(actions.setUsers).toHaveBeenCalledWith(results.data);
});

// eslint-disable-next-line max-lines-per-function
test('createUser', async () => {
	const { config, actions } = context;
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

	await Remote.createUser({ config, state, actions });

	expect(axios.post).toHaveBeenCalledWith(config.localHostURL, state);
	expect(actions.addUser).toHaveBeenCalledWith(results.data);
});

test('removeUser', () => {
	const { config, actions } = context;
	const user = {
		// eslint-disable-next-line no-magic-numbers
		id: rndBetween(0, 9),
	};
	const expectations = [true, false];
	const mockContext = {
		data: user,
		actions: actions,
	};

	expectations.forEach(async (returned) => {
		jest.spyOn(axios, 'delete').mockReturnValue(returned);
		jest.spyOn(actions, 'removeUser').mockReturnValue();

		await Remote.removeUser({ ...mockContext, config });

		expect(axios.delete)
			.toHaveBeenCalledWith(`${ config.localHostURL }${ user.id }`);
		returned && expect(actions.removeUser)
			.toHaveBeenCalledWith(mockContext.data);
	});
});
