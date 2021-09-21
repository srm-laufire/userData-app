import { render, fireEvent } from '@testing-library/react';
import Gender from './gender';
import { getRndString } from '../helpers';
import { secure } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('Gender', () => {
	const gender = getRndString();
	const context = secure({
		state: {
			gender,
		},
		actions: {
			setGender: jest.fn(),
		},
	});

	test('renders the component with appropriate value', () => {
		const component = render(Gender(context)).getByRole('gender');

		expect(component.value).toEqual(gender);
		expect(component).toBeInTheDocument();
	});

	test('when the input value is change, triggers the action setGender',
		() => {
			const value = getRndString();

			const component = render(Gender(context)).getByRole('gender');

			fireEvent.change(component, { target: { value }});

			expect(context.actions.setGender)
				.toHaveBeenCalledWith(value);
		});
});
