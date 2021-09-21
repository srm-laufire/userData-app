import actions from './actions';

describe('actions', () => {
	const { setName } = actions;

	test('setName', () => {
		const data = Symbol('data');

		const result = setName({ data });

		expect(result).toMatchObject({ name: data });
	});
});
