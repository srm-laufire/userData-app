import { render, fireEvent } from '@testing-library/react';
import Gender from './gender';
import { secure } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';
import { React } from 'react';
import config from '../core/config';
import Options from './options';

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

	test('when the input value is change, triggers the action setGender',
		() => {
			const value = rndValue(genderOptions);

			const component = render(Gender(context)).getByRole('gender');

			fireEvent.change(component, { target: { value }});

			expect(context.actions.setGender)
				.toHaveBeenCalledWith(value);
		});

	test('To check whether the genderOptions are passed into options', () => {
		const returnValue = <option role="mock"/>;

		jest.spyOn(genderOptions, 'map').mockReturnValue(returnValue);

		const component = render(Gender(context)).getByRole('mock');

		expect(component).toBeInTheDocument();
		expect(genderOptions.map).toHaveBeenCalledWith(Options);
	});
});
