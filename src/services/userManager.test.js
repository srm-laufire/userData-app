/* eslint-disable max-lines-per-function */
import UserManager from './userManager';
import { map } from '@laufire/utils/collection';

describe('UserManager', () => {
	const { isEmpty, add, remove } = UserManager;

	const user = {
		id: 1,
		name: Symbol('name'),
		age: Symbol('age'),
		gender: Symbol('gender'),
	};

	describe('isEmpty', () => {
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
});
