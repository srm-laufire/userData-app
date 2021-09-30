/* eslint-disable max-lines-per-function */
import actions from './actions';
import UserManager from '../services/userManager';
import { map } from '@laufire/utils/collection';

// eslint-disable-next-line max-statements
describe('actions', () => {
	const context = Symbol('context');
	const returned = Symbol('returned');
	const { setName, setAge, setGender, resetInput, updateUsers } = actions;

	describe('proxies', () => {
		const testProxy = ({ mock, impactedKey, action }) => {
			const { library, func } = mock;

			jest.spyOn(library, func).mockReturnValue(returned);

			const result = actions[action](context);

			expect(result).toMatchObject({ [impactedKey]: returned });
			expect(UserManager[func]).toHaveBeenCalledWith(context);
		};
		const proxies = {
			addUser: {
				mock: {
					library: UserManager,
					func: 'add',
				},
				impactedKey: 'users',
			},
			removeUser: {
				mock: {
					library: UserManager,
					func: 'remove',
				},
				impactedKey: 'users',
			},
		};

		map(proxies, (params, action) =>
			test(action, () => testProxy({ ...params, action })));
	});

	const combinations = [
		//TODO: Remove the unnecessary values at [1].
		['setName', setName, 'name'],
		['setGender', setGender, 'gender'],
		['updateUsers', updateUsers, 'users'],
	];

	test.each(combinations)('%p', (
		dummy, action, impactedKey
	) => {
		const data = Symbol('data');

		const result = action({ data });

		expect(result).toMatchObject({ [impactedKey]: data });
	});

	//TODO: Combine this with the tests above.
	test('setAge', () => {
		const data = 20;

		const result = setAge({ data });

		expect(result).toMatchObject({ age: data });
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
});
