/* eslint-disable react/display-name */
jest.mock('./components/name', () => () => <div role="name"/>);
jest.mock('./components/age', () => () => <div role="age"/>);
jest.mock('./components/gender', () => () => <div role="gender"/>);
jest.mock('./components/addButton', () => () => <div role="addButton"/>);
jest.mock('./components/users', () => () => <div role="users"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const components = ['name', 'age', 'gender', 'addButton', 'users'];
	const { getByRole } = render(<App/>);

	components.forEach((component) => {
		expect(getByRole(component)).toBeInTheDocument();
	});
	expect(getByRole('App')).toHaveClass('App');
});
