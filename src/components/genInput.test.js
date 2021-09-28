import { getRndString } from '../helpers';
import { rndBetween } from '@laufire/utils/random';
import { render } from '@testing-library/react';
import genInput from './genInput';
import { secure } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('genInput', () => {
	const name = getRndString();
	// eslint-disable-next-line no-magic-numbers
	const age = String(rndBetween(0, 9));
	const expectations = [
		['name', name],
		['age', age],
	];

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
});
