import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (user) =>
	<button
		role="removeButton"
		onClick={ () => Remote.removeUser(user) }
	>X</button>;

export default RemoveButton;
