import { render, fireEvent } from '@testing-library/react';
import Gender from './gender';
import { secure } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { React } from 'react';
import config from '../core/config';
import Option from './option';

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
	});

	test('renders the component with appropriate value', () => {
		const component = render(Gender(context)).getByRole('gender');

		expect(component.value).toEqual(gender);
		expect(component).toBeInTheDocument();
	});

	test('action.setGender is triggered, when the input value is changed',
		() => {
			const value = gender;

			const component = render(Gender(context)).getByRole('gender');

			fireEvent.change(component, { target: { value }});

			expect(context.actions.setGender)
				.toHaveBeenCalledWith(value);
		});

	test('Validate whether the genderOptions are passed', () => {
		const returnValue = <option role="mock"/>;

		jest.spyOn(genderOptions, 'map').mockReturnValue(returnValue);

		const component = render(Gender(context)).getByRole('mock');

		expect(genderOptions.map).toHaveBeenCalledWith(Option);
		expect(component).toBeInTheDocument();
	});
});
