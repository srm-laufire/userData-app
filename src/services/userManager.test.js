/* eslint-disable max-lines-per-function */
import UserManager from './userManager';
import { map, values } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { getRndString } from '../helpers';

describe('UserManager', () => {
	const { isEmpty, add, remove } = UserManager;

	const user = {
		id: getRndString(),
		name: Symbol('name'),
		age: Symbol('age'),
		gender: Symbol('gender'),
	};

	test('isEmpty', () => {
		const input = { name: Symbol('name'),
			age: Symbol('age') };
		const object = map(input, (value) => rndValue(['', value]));

		const context = { state: object };

		const result = isEmpty(context);

		expect(result).toEqual(values(object).includes(''));
	});

	test('add function concat the user in users', () => {
		const users = [];
		const context = {
			state: {
				users,
			},
			data: Symbol('user'),
		};
		const expected = Symbol('users');

		jest.spyOn(users, 'concat').mockReturnValue(expected);

		const result = add(context);

		expect(result).toEqual(expected);
	});

	test('remove function remove the user who have same id', () => {
		const newUser = {
			id: getRndString(),
			name: Symbol('name'),
			age: Symbol('age'),
			gender: Symbol('gender'),
		};
		const users = [
			user,
			newUser,
		];

		const context = {
			state: {
				users,
			},
			data: user,
		};
		const expected = [newUser];

		const result = remove(context);

		expect(result).toEqual(expected);
	});
});
