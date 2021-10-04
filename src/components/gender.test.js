import { render, fireEvent } from '@testing-library/react';
import { secure } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import config from '../core/config';
import Gender from './gender';

// eslint-disable-next-line max-lines-per-function
describe('Gender', () => {
	const { genderOptions } = config;
	const gender = rndValue(genderOptions);
	const context = secure({
		state: {
			gender,
		},
		actions: {
			setGender: jest.fn(),
		},
		config: {
			genderOptions,
		},
	});

	test('renders the component as expected',
		() => {
			const { getByRole, getAllByRole } = render(Gender(context));
			const genderComponent = getByRole('gender');
			const options = getAllByRole('option');
			const values = options.map((option) => option.value);

			options.forEach((option) => {
				expect(option).toBeInTheDocument();
				expect(option).toHaveTextContent(option.value);
			});

			expect(values).toEqual(genderOptions);
			expect(genderComponent).toBeInTheDocument();
			expect(genderComponent.value).toEqual(gender);
		});

	test('action.setGender is triggered, when the input value is changed',
		() => {
			const value = gender;

			const component = render(Gender(context)).getByRole('gender');

			fireEvent.change(component, { target: { value }});

			expect(context.actions.setGender)
				.toHaveBeenCalledWith(value);
		});
});
