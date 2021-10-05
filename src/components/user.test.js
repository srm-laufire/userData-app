import { React } from 'react';
import { render } from '@testing-library/react';
import { getRndString } from '../helpers';
import { map } from '@laufire/utils/collection';
import * as RemoveButton from './removeButton';
import User from './user';

// eslint-disable-next-line max-lines-per-function
describe('User', () => {
	const user = {
		name: getRndString(),
		age: getRndString(),
		gender: getRndString(),
	};
	const context = {
		data: user,
	};

	test('renders the appropriate component', () => {
		const removeButton = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<span role="removeButton"/>);

		const { getByRole } = render(User(context));

		expect(getByRole('user')).toBeInTheDocument();
		expect(removeButton).toHaveBeenCalledWith(context);
	});

	test('renders the children with appropriate class',
		() => {
			const { getByRole } = render(User(context));

			map(user, (value, key) => {
				expect(getByRole(key)).toHaveClass(key);
				expect(getByRole(key)).toHaveTextContent(value);
			});
		});
});
