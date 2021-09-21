import { render, fireEvent } from '@testing-library/react';
import Gender from './gender';
import { rndString } from '@laufire/utils/random';

// eslint-disable-next-line max-lines-per-function
describe('Gender', () => {
	const gender = '';
	const context = {
		state: {
			gender,
		},
		actions: {
			setGender: jest.fn(),
		},
	};

	test('renders the component with appropriate value', () => {
		const component = render(Gender(context)).getByRole('gender');

		expect(component.value).toEqual(gender);
		expect(component).toBeInTheDocument();
	});

	test('when the input value is change, triggers the action setGender',
		() => {
			const stringLength = 16;
			const value = rndString(stringLength);

			const component = render(Gender(context)).getByRole('gender');

			fireEvent.change(component, { target: { value }});

			expect(context.actions.setGender)
				.toHaveBeenCalledWith(value);
		});
});
