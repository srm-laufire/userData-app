/* eslint-disable max-lines-per-function */
import UserManager from './userManager';

describe('UserManager', () => {
	const { isEmpty, add } = UserManager;

	const user = {
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
		const { name, age, gender } = user;
		const users = [user];
		const context = {
			state: {
				users,
				name,
				age,
				gender,
			},
		};
		const expectedLength = 2;

		const result = add(context);

		expect(result).toHaveLength(expectedLength);
	});
});
