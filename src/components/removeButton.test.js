
import { render, fireEvent } from '@testing-library/react';
import Remote from '../services/remote';
import RemoveButton from './removeButton';

describe('RemoveButton', () => {
	const user = Symbol('user');
	const context = {
		data: user,
	};

	test('renders the appropriate component', () => {
		const component = render(RemoveButton(context))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('X');
	});

	test('when clicked triggers the action, removeUser', () => {
		jest.spyOn(Remote, 'removeUser').mockReturnValue();

		const component = render(RemoveButton(context))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(Remote.removeUser).toHaveBeenCalledWith(context);
	});
});
