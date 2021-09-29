/* eslint-disable max-lines-per-function */
import { getRndString } from '../helpers';
import { rndBetween } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';
import genInput from './genInput';
import { secure } from '@laufire/utils/collection';

describe('genInput', () => {
	const name = getRndString();
	// eslint-disable-next-line no-magic-numbers
	const age = String(rndBetween(0, 9));
	const expectations = [
		['name', name],
		['age', age],
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
		(param, paramValue) => {
			const context = secure({
				state: {
					[param]: paramValue,
				},
			});

			const Result = genInput(param);
			const component = render(Result(context)).getByRole(param);

			expect(component).toBeInTheDocument();
			expect(component.value).toEqual(paramValue);
		});

	test.each(expectations)('required action for %p is triggered,'
		+ 'when the input value is changed',
	(param, paramValue) => {
		const value = getRndString();
		const actionNames = {
			name: 'setName',
			age: 'setAge',
		};

		const context = secure({
			state: {
				[param]: paramValue,
			},
			actions: mockActions[param],
		});

		const Result = genInput(param);
		const component = render(Result(context)).getByRole(param);

		fireEvent.change(component, { target: { value }});

		expect(context.actions[actionNames[param]])
			.toHaveBeenCalledWith(value);
	});
});
