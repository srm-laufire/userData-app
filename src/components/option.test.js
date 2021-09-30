import { render } from '@testing-library/react';
import Option from './option';
import config from '../core/config';
import { rndValue } from '@laufire/utils/random';

test('renders the component with appropriate value', () => {
	const { genderOptions } = config;
	const gender = rndValue(genderOptions);

	const component = render(Option(gender)).getByRole('option');

	// TODO: Test for the attribute, key.
	expect(component).toBeInTheDocument();
	expect(component.value).toEqual(gender);
	expect(component).toHaveTextContent(gender);
});
