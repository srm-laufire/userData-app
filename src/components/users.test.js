import { React } from 'react';
import { render } from '@testing-library/react';
import Users from './users';
import User from './user';

describe('Users', () => {
	const users = [];
	const context = {
		state: {
			users,
		},
	};

	test('returns a appropriate component', () => {
		const component = render(Users(context)).getByRole('users');

		expect(component).toBeInTheDocument();
	});

	// TODO: Fix the description.
	test('Validate whether the users are passed', () => {
		const returnValue = <div role="mock"/>;

		jest.spyOn(users, 'map').mockReturnValue(returnValue);

		const component = render(Users(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(users.map).toHaveBeenCalledWith(User);
	});
});
