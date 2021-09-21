import { React } from 'react';

const Age = (context) => {
	const { state: { age }} = context;

	return (
		<input
			value={ age }
			role="age"
			onChange={ (evt) => context.actions.setAge(evt.target.value) }
		/>);
};

export default Age;
