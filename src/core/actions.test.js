import actions from './actions';

describe('actions', () => {
	const { setName, setAge, setGender } = actions;

	test('setName', () => {
		const data = Symbol('data');

		const result = setName({ data });

		expect(result).toMatchObject({ name: data });
	});

	test('setAge', () => {
		const data = Symbol('data');

		const result = setAge({ data });

		expect(result).toMatchObject({ age: data });
	});

	test('setGender', () => {
		const data = Symbol('data');

		const result = setGender({ data });

		expect(result).toMatchObject({ gender: data });
	});
});
