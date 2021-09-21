import { React } from 'react';

const Gender = (context) => {
	const { state: { gender }} = context;

	return (
		<input
			value={ gender }
			role="gender"
			onChange={ (evt) => context.actions.setGender(evt.target.value) }
		/>);
};

export default Gender;
