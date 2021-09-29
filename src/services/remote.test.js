import Remote from './remote';
import context from '../core/context';
import axios from 'axios';

test('fetchUsers', async () => {
	const { actions } = context;
	const results = {
		data: Symbol('data'),
	};

	jest.spyOn(axios, 'get').mockReturnValue(results);
	jest.spyOn(actions, 'updateUsers');

	const result = await Remote.fetchUsers();

	expect(result).toBeUndefined();
	expect(axios.get).toHaveBeenCalledWith('http://localhost:7000/');
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
	const { name, age, gender } = state;
	const results = {
		data: Symbol('data'),
	};

	jest.spyOn(axios, 'post').mockReturnValue(results);
	jest.spyOn(actions, 'addUser').mockReturnValue();

	const result = await Remote.createUser({ state });

	expect(result).toBeUndefined();
	expect(axios.post).toHaveBeenCalledWith('http://localhost:7000/', {
		name,
		age,
		gender,
	});
	expect(actions.addUser).toHaveBeenCalledWith(results.data);
});

test('removeUser', async () => {
	const { actions } = context;
	const user = {
		id: 1,
	};

	jest.spyOn(axios, 'delete').mockReturnValue(true);
	jest.spyOn(actions, 'removeUser').mockReturnValue();

	const result = await Remote.removeUser(user);

	expect(result).toBeUndefined();
	expect(axios.delete)
		.toHaveBeenCalledWith(`http://localhost:7000/${ user.id }`);
	expect(actions.removeUser)
		.toHaveBeenCalledWith(user);
});
