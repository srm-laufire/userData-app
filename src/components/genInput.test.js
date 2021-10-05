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
		['setName', 'name'],
		['setAge', 'age'],
	];
	const mockValues = { name, age };
	const mockActions = {
		name: {
			setName: jest.fn(),
		},
		age: {
			setAge: jest.fn(),
		},
	};

	test.each(expectations)('renders the component %p with appropriate value',
		(dummy, type) => {
			const context = secure({
				state: {
					[type]: mockValues[type],
				},
			});

			const Input = genInput(type);
			const component = render(Input(context)).getByRole(type);

			expect(component).toBeInTheDocument();
			expect(component.value).toEqual(mockValues[type]);
		});

	test.each(expectations)('required action for %p is triggered,'
		+ 'when the input value is changed',
	(actionName, type) => {
		const value = getRndString();
		const context = secure({
			state: {
				[type]: mockValues[type],
			},
			actions: mockActions[type],
		});

		const Result = genInput(type);
		const component = render(Result(context)).getByRole(type);

		fireEvent.change(component, { target: { value }});

		expect(context.actions[actionName])
			.toHaveBeenCalledWith(value);
	});
});
