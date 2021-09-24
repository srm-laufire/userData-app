
import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

// eslint-disable-next-line max-lines-per-function
describe('RemoveButton', () => {
	const user = Symbol('user');

	test('renders the component with appropriate component', () => {
		const component = render(RemoveButton(user)).getByRole('removeButton');

		expect(component).toBeInTheDocument();
	});

	test('when clicked triggers the action, removeUser', () => {
		jest.spyOn(Remote, 'removeUser');
		const component = render(RemoveButton(user))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(Remote.removeUser).toHaveBeenCalledWith(user);
	});
});
