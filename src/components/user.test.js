import User from './user';
import { render } from '@testing-library/react';

// eslint-disable-next-line max-lines-per-function
describe('User', () => {
	const user = {
		name: 'name',
		age: 'age',
		gender: 'gender',
	};

	test('User returns name, age, gender', () => {
		const { getByRole } = render(User(user));
		const component = getByRole('user');

		expect(component).toBeInTheDocument();
		expect(getByRole('name')).toBeInTheDocument();
		expect(getByRole('name')).toHaveClass('user-style');
		expect(getByRole('age')).toBeInTheDocument();
		expect(getByRole('age')).toHaveClass('user-style');
		expect(getByRole('gender')).toBeInTheDocument();
		expect(getByRole('gender')).toHaveClass('user-style');
	});
});
