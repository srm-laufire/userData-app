import { render } from '@testing-library/react';
import { rndValue } from '@laufire/utils/random';
import config from '../core/config';
import Option from './option';

test('renders the component with appropriate value', () => {
	const { genderOptions } = config;
	const gender = rndValue(genderOptions);

	const component = render(Option(gender)).getByRole('option');

	expect(component).toBeInTheDocument();
	expect(component.value).toEqual(gender);
	expect(component).toHaveTextContent(gender);
});
