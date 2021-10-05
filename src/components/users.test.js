import { React } from 'react';
import { render } from '@testing-library/react';
import Users from './users';

// eslint-disable-next-line max-lines-per-function
describe('Users', () => {
	const users = [];
	const context = {
		state: {
			users,
		},
		data: Symbol('user'),
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
	});
});
