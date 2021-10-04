/* eslint-disable max-lines-per-function */
import { getRndString } from '../helpers';
import { rndBetween } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';
import { secure } from '@laufire/utils/collection';
import genInput from './genInput';

describe('genInput', () => {
	const name = getRndString();
	// eslint-disable-next-line no-magic-numbers
	const age = String(rndBetween(0, 9));
	const expectations = [
		['setName', 'name', name],
		['setAge', 'age', age],
	];
	const mockActions = {
		name: {
			setName: jest.fn(),
		},
		age: {
			setAge: jest.fn(),
		},
	};

	test.each(expectations)('renders the component %p with appropriate value',
		(
			dummy, type, value
		) => {
			const context = secure({
				state: {
					[type]: value,
				},
			});

			const Input = genInput(type);
			const component = render(Input(context)).getByRole(type);

			expect(component).toBeInTheDocument();
			expect(component.value).toEqual(value);
		});

	test.each(expectations)('required action for %p is triggered,'
		+ 'when the input value is changed',
	(
		action, param, paramValue
	) => {
		const value = getRndString();
		const context = secure({
			state: {
				[param]: paramValue,
			},
			actions: mockActions[param],
		});

		const Result = genInput(param);
		const component = render(Result(context)).getByRole(param);

		fireEvent.change(component, { target: { value }});

		expect(context.actions[action])
			.toHaveBeenCalledWith(value);
	});
});
