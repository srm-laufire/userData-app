import { React } from 'react';
import context from '../core/context';

const RemoveButton = (user) =>
	<button
		role="removeButton"
		onClick={ () => context.actions.removeUser(user) }
	>X</button>;

export default RemoveButton;
