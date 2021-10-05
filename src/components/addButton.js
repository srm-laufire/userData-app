import { React } from 'react';
import Remote from '../services/remote';
import UserManager from '../services/userManager';

const AddButton = (context) =>
	<button
		role="addButton"
		disabled={ UserManager.isEmpty(context) }
		onClick={ () => {
			Remote.createUser(context);
			context.actions.resetInput();
		} }
	>Add
	</button>;

export default AddButton;
