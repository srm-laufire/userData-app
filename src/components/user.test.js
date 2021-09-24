import { React } from 'react';
import User from './user';
import { render } from '@testing-library/react';
import * as RemoveButton from './removeButton';

// eslint-disable-next-line max-lines-per-function
describe('User', () => {
	const user = {
		name: 'name',
		age: 'age',
		gender: 'gender',
	};

	// eslint-disable-next-line max-statements
	test('User returns name, age, gender', () => {
		const removeBotton = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<span role="removeButton"/>);

		const { getByRole } = render(User(user));
		const component = getByRole('user');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent(user.name);
		expect(component).toHaveTextContent(user.age);
		expect(component).toHaveTextContent(user.gender);
		expect(getByRole('name')).toHaveClass('user-style');
		expect(getByRole('age')).toHaveClass('user-style');
		expect(getByRole('gender')).toHaveClass('user-style');
		expect(removeBotton).toHaveBeenCalledWith(user);
	});
});
