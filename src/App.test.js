import { React } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App/>);
	const { getByText } = render(<App/>);

	expect(getByText('Hii')).toBeInTheDocument();
	expect('App').toHaveClass('App');
});
