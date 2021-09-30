/* eslint-disable react/display-name */
//NOTE: Good one :)
jest.mock('./components/genInput',
	() => (value) => () => <div role={ value }/>);
jest.mock('./components/gender', () => () => <div role="gender"/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);
jest.mock('./components/users', () => () => <div role="users"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

//TODO: Fix the description.
test('renders learn react link', () => {
	const components = ['name', 'age', 'gender', 'addButton', 'users'];
	const { getByRole } = render(<App/>);

	components.forEach((component) => {
		expect(getByRole(component)).toBeInTheDocument();
	});
	expect(getByRole('App')).toHaveClass('App');
});
