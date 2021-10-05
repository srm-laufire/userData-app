import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (context) =>
	<button
		role="removeButton"
		onClick={ () => Remote.removeUser(context) }
	>X</button>;

export default RemoveButton;
