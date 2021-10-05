import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import UserManager from '../services/userManager';
import AddButton from './addButton';

// eslint-disable-next-line max-lines-per-function
describe('AddButton', () => {
	const context = {
		actions: {
			resetInput: jest.fn(),
		},
	};

	test('renders the appropriate component', () => {
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(true);

		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Add');
	});

	const expectations = [
		['enabled', true],
		['disabled', false],
	];

	test.each(expectations)('button is %p, if isEmpty returns %p',
		(dummy, returnValue) => {
			jest.spyOn(UserManager, 'isEmpty').mockReturnValue(returnValue);

			const component = render(AddButton(context)).getByRole('addButton');

			expect(component.disabled).toEqual(returnValue);
			expect(UserManager.isEmpty).toHaveBeenCalledWith(context);
		});

	test('when clicked triggers the action, addUser', () => {
		jest.spyOn(Remote, 'createUser').mockReturnValue();
		jest.spyOn(UserManager, 'isEmpty').mockReturnValue(false);

		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.resetInput).toHaveBeenCalled();
		expect(Remote.createUser).toHaveBeenCalledWith(context);
	});
});
