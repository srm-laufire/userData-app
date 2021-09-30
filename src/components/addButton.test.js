import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';
import UserManager from '../services/userManager';

// eslint-disable-next-line max-lines-per-function
// TODO: Check text content.
// eslint-disable-next-line max-lines-per-function
describe('AddButton', () => {
	const context = {
		state: {
			// TODO: Remove unnecessary keys.
			name: Symbol('name'),
			age: Symbol('age'),
			gender: Symbol('gender'),
		},
		actions: {
			resetInput: jest.fn(),
		},
	};

	test('renders the appropriate component', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	// TODO: Combine the tests.
	test('button is disabled, if isEmpty returns true', () => {
		// TODO: Test isEmpty toHaveBeenCalledWith.
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component.disabled).toEqual(true);
	});

	// TODO: Combine the tests.
	test('button is enabled, if isEmpty returns false', () => {
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component.disabled).toEqual(false);
	});

	test('when clicked triggers the action, addUser', () => {
		jest.spyOn(UserManager, 'remoteCall').mockReturnValue();

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.resetInput).toHaveBeenCalled();
		expect(UserManager.remoteCall).toHaveBeenCalledWith(context);
	});
});
