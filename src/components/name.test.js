import { render, fireEvent } from '@testing-library/react';
import Name from './name';

// eslint-disable-next-line max-lines-per-function
describe('Name', () => {
	const context = {
		state: {
			name: '',
		},
		actions: {
			setName: jest.fn(),
		},
	};

	test('renders the component with appropriate class', () => {
		const component = render(Name(context)).getByRole('name');

		expect(component).toBeInTheDocument();
	});

	test('when the input value is change, triggers the action setName', () => {
		const component = render(Name(context)).getByRole('name');

		fireEvent.change(component, { target: { value: 'name' }});

		expect(context.actions.setName)
			.toHaveBeenCalledWith('name');
	});
});
