import { React } from 'react';
import { render } from '@testing-library/react';
import User from './user';
import Users from './users';

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

	test('render the users', () => {
		const returnValue = <div role="mock"/>;

		jest.spyOn(users, 'map').mockReturnValue(returnValue);

		const component = render(Users(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(users.map).toHaveBeenCalledWith(User);
	});
});
