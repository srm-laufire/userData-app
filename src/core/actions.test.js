/* eslint-disable max-lines-per-function */
import actions from './actions';
import UserManager from '../services/userManager';

describe('actions', () => {
	const { setName, setAge, setGender,
		addUser, resetInput, updateUsers } = actions;

	test('setName', () => {
		const data = Symbol('data');

		const result = setName({ data });

		expect(result).toMatchObject({ name: data });
	});

	test('setAge', () => {
		const data = 20;

		const result = setAge({ data });

		expect(result).toMatchObject({ age: data });
	});

	test('setGender', () => {
		const data = Symbol('data');

		const result = setGender({ data });

		expect(result).toMatchObject({ gender: data });
	});

	test('addUser', () => {
		const context = Symbol('context');
		const returned = Symbol('returned');

		jest.spyOn(UserManager, 'add').mockReturnValue(returned);

		const result = addUser(context);

		expect(result).toMatchObject({ users: returned });
	});

	test('resetInput', () => {
		const expectedResult = {
			name: '',
			age: '',
			gender: '',
		};

		const result = resetInput();

		expect(result).toEqual(expectedResult);
	});

	test('updateUsers', () => {
		const data = Symbol('data');

		const result = updateUsers({ data });

		expect(result).toMatchObject({ users: data });
	});
});
