import { render } from '@testing-library/react';
import Options from './options';
import config from '../core/config';
import { rndValue } from '@laufire/utils/random';

test('renders the component with appropriate value', () => {
	const { genderOptions } = config;
	const gender = rndValue(genderOptions);

	const component = render(Options(gender)).getByRole('option');

	expect(component).toBeInTheDocument();
	expect(component.value).toEqual(gender);
	expect(component).toHaveTextContent(gender);
});
