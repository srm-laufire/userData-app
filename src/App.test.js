/* eslint-disable react/display-name */
jest.mock('./components/name', () => () => <div role="name"/>);
jest.mock('./components/age', () => () => <div role="age"/>);
jest.mock('./components/gender', () => () => <div role="gender"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('name')).toBeInTheDocument();
	expect(getByRole('age')).toBeInTheDocument();
	expect(getByRole('gender')).toBeInTheDocument();
	expect(getByRole('App')).toHaveClass('App');
});
