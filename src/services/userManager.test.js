/* eslint-disable max-lines-per-function */
import UserManager from './userManager';

describe('UserManager', () => {
	const { isEmpty, add, remove } = UserManager;

	const user = {
		id: 1,
		name: Symbol('name'),
		age: Symbol('age'),
		gender: Symbol('gender'),
	};

	describe('isEmpty', () => {
		test('isEmpty returns true, if the data is empty string', () => {
			const context = {
				state: {
					name: '',
					age: '',
					gender: '',
				},
			};

			const result = isEmpty(context);

			expect(result).toEqual(true);
		});

		test('isEmpty returns false, if the data is present', () => {
			const { name, age, gender } = user;
			const context = {
				state: {
					name,
					age,
					gender,
				},
			};

			const result = isEmpty(context);

			expect(result).toEqual(false);
		});
	});

	test('add function concat the user in users', () => {
		const state = {
			users: [user],
		};

		const expectedLength = 2;

		const result = add(state, user);

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
		};

		const expected = users[1];

		const result = remove({ ...context, data: user });

		expect(result).toEqual([expected]);
		expect(result).toHaveLength(1);
	});
});
