import { render, fireEvent } from '@testing-library/react';
import Age from './age';
import { getRndString } from '../helpers';
import { secure } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('Age', () => {
	const age = Number(getRndString());
	const context = secure({
		state: {
			age,
		},
		actions: {
			setAge: jest.fn(),
		},
	});

	test('renders the component with appropriate value', () => {
		const component = render(Age(context)).getByRole('age');

		expect(Number(component.value)).toEqual(age);
		expect(component).toBeInTheDocument();
	});

	test('when the input value is change, triggers the action setAge', () => {
		const value = getRndString();

		const component = render(Age(context)).getByRole('age');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.setAge)
			.toHaveBeenCalledWith(value);
	});
});
