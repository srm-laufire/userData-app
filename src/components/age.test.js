import { render, fireEvent } from '@testing-library/react';
import Age from './age';

// eslint-disable-next-line max-lines-per-function
describe('Age', () => {
	const context = {
		state: {
			age: '',
		},
		actions: {
			setAge: jest.fn(),
		},
	};

	test('renders the component with appropriate class', () => {
		const component = render(Age(context)).getByRole('age');

		expect(component).toBeInTheDocument();
	});

	test('when the input value is change, triggers the action setAge', () => {
		const component = render(Age(context)).getByRole('age');

		fireEvent.change(component, { target: { value: 'age' }});

		expect(context.actions.setAge)
			.toHaveBeenCalledWith('age');
	});
});
