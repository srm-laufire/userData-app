
jest.mock('../core/context', () => ({ actions: { removeUser: jest.fn() }}));
import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import RemoveButton from './removeButton';

// eslint-disable-next-line max-lines-per-function
describe('RemoveButton', () => {
	const user = Symbol('user');

	test('renders the component with appropriate component', () => {
		const component = render(RemoveButton(user)).getByRole('removeButton');

		expect(component).toBeInTheDocument();
	});

	test('when clicked triggers the action, removeUser', () => {
		const component = render(RemoveButton(user))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(context.actions.removeUser).toHaveBeenCalledWith(user);
	});
});
