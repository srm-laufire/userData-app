/* eslint-disable max-lines-per-function */
import actions from './actions';
import UserManager from '../services/userManager';
import { map } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

// eslint-disable-next-line max-statements
describe('actions', () => {
	const context = Symbol('context');
	const returned = Symbol('returned');
	const { resetInput } = actions;

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
		['setName', 'name', Symbol('data')],
		['setGender', 'gender', Symbol('data')],
		// eslint-disable-next-line no-magic-numbers
		['setAge', 'age', rndBetween(0, 9)],
		['setUsers', 'users', Symbol('data')],
	];

	test.each(combinations)('%p', (
		action, impactedKey, data
	) => {
		const result = actions[action]({ data });

		expect(result).toMatchObject({ [impactedKey]: data });
	});

	test('resetInput', () => {
		const expectedResult = {
			name: '',
			age: '',
		};

		const result = resetInput();

		expect(result).toEqual(expectedResult);
	});
});
