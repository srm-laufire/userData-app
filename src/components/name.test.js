import { secure } from '@laufire/utils/collection';
import { render, fireEvent } from '@testing-library/react';
import { getRndString } from '../helpers';
import Name from './name';

// eslint-disable-next-line max-lines-per-function
describe('Name', () => {
	const name = getRndString();
	const context = secure({
		state: {
			name,
		},
		actions: {
			setName: jest.fn(),
		},
	});

	test('renders the component with appropriate value', () => {
		const component = render(Name(context)).getByRole('name');

		expect(component.value).toEqual(name);
		expect(component).toBeInTheDocument();
	});

	test('action.setName is triggered, when the input value is changed', () => {
		const value = getRndString();

		const component = render(Name(context)).getByRole('name');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setName)
			.toHaveBeenCalledWith(value);
	});
});
