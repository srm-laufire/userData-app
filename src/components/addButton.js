import { React } from 'react';
import UserManager from '../services/userManager';

const AddButton = (context) => {
	const { isEmpty } = UserManager;

	return (
		<button
			role="addButton"
			disabled={ isEmpty(context) }
			onClick={ () => {
				UserManager.remoteCall(context);
				context.actions.resetInput();
			} }
		>Add
		</button>);
};

export default AddButton;
