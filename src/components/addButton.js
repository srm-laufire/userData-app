import { React } from 'react';
import UserManager from '../services/userManager';
import Remote from '../services/remote';

const AddButton = (context) => {
	const { isEmpty } = UserManager;

	return (
		<button
			role="addButton"
			disabled={ isEmpty(context) }
			onClick={ () => {
				Remote.createUser(context);
				context.actions.resetInput();
			} }
		>Add
		</button>);
};

export default AddButton;
