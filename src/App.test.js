// eslint-disable-next-line react/display-name
jest.mock('./components/name', () => () => <div role="name"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('name')).toBeInTheDocument();
	expect(getByRole('App')).toHaveClass('App');
});
