import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';
import UserManager from '../services/userManager';

// eslint-disable-next-line max-lines-per-function
describe('AddButton', () => {
	const context = {
		state: {
			name: Symbol('name'),
			age: Symbol('age'),
			gender: Symbol('gender'),
		},
		actions: {
			addUser: jest.fn(),
		},
	};

	test('renders the component with appropriate component', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('button is disabled, if isEmpty returns true', () => {
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component.disabled).toEqual(true);
	});

	test('button is enabled, if isEmpty returns false', () => {
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component.disabled).toEqual(false);
	});

	test('when clicked triggers the action, addUser', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addUser).toHaveBeenCalledWith(context);
	});
});
