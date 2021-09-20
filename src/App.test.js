import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByText, getByRole } = render(<App/>);

	expect(getByText('Hii')).toBeInTheDocument();
	expect(getByRole('App')).toHaveClass('App');
});
