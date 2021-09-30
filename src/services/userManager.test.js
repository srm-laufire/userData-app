/* eslint-disable max-lines-per-function */
import UserManager from './userManager';
import { map } from '@laufire/utils/collection';
import Remote from './remote';

describe('UserManager', () => {
	const { isEmpty, add, remove, remoteCall } = UserManager;

	const user = {
		id: 1,
		name: Symbol('name'),
		age: Symbol('age'),
		gender: Symbol('gender'),
	};

	describe('isEmpty', () => {
		//NOTE: Good one :)
		const generateTest = ({ name, age, expected }) => {
			const context = {
				state: {
					name,
					age,
				},
			};

			const result = isEmpty(context);

			expect(result).toEqual(expected);
		};

		//TODO: Only two case are needed "some empty" and "all full".
		const combinations = {
			nameEmpty: {
				name: '',
				age: Symbol('age'),
				expected: true,
			},

			ageEmpty: {
				name: Symbol('name'),
				age: '',
				expected: true,
			},

			allEmpty: {
				name: '',
				age: '',
				expected: true,
			},

			noEmpty: {
				name: Symbol('name'),
				age: Symbol('age'),
				expected: false,
			},
		};

		map(combinations, (params, action) =>
			test(action, () => generateTest(params)));
	});

	test('add function concat the user in users', () => {
		const context = {
			state: {
				users: [user],
			},
			data: user,
		};

		const expectedLength = 2;

		const result = add(context);

		//TODO: Test the content instead of just the length.
		expect(result).toHaveLength(expectedLength);
	});

	test('remove function remove the user who have same id', () => {
		const users = [
			user,
			{
				...user,
				id: 2,
			},
		];

		const context = {
			state: {
				users,
			},
			data: user,
		};

		const expected = users[1];

		const result = remove(context);

		expect(result).toEqual([expected]);
	});

	const expectations = [
		['called', true, Symbol('user')],
		['did not call', false, false],
	];

	test.each(expectations)('%p the create user function in remote,'
	+ ' when the isEmpty returns %p', async (
		dummy, returned, expected
	) => {
		const context = Symbol('context');

		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(returned);
		jest.spyOn(Remote, 'createUser').mockReturnValue(expected);

		const result = await remoteCall(context);

		expect(result).toEqual(expected);
		expect(UserManager.isEmpty).toHaveBeenCalledWith(context);
		returned && expect(Remote.createUser).toHaveBeenCalledWith(context);
	});
});
