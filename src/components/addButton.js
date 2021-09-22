import { React } from 'react';
import UserManager from '../services/userManager';

const AddButton = (context) => {
	const { isEmpty } = UserManager;

	return (
		<button
			role="addButton"
			disabled={ isEmpty(context) }
			onClick={ () => context.actions.addUser(context) }
		>Add
		</button>);
};

export default AddButton;
