import { React } from 'react';
import User from './user';
import { render } from '@testing-library/react';
import * as RemoveButton from './removeButton';
import { getRndString } from '../helpers';
import { map } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
describe('User', () => {
	const user = {
		name: getRndString(),
		age: getRndString(),
		gender: getRndString(),
	};

	test('User returns name, age, gender', () => {
		const removeButton = jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<span role="removeButton"/>);

		const { getByRole } = render(User(user));

		expect(getByRole('user')).toBeInTheDocument();
		expect(removeButton).toHaveBeenCalledWith(user);
	});

	test('renders the children with appropriate class',
		() => {
			const { getByRole } = render(User(user));

			map(user, (value, key) => {
				expect(getByRole(key)).toHaveClass(key);
				expect(getByRole(key)).toHaveTextContent(value);
			});
		});
});
