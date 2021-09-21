import { React } from 'react';

const Name = (context) => {
	const { state: { name }} = context;

	return (
		<input
			value={ name }
			role="name"
			onChange={ (evt) => context.actions.setName(evt.target.value) }
		/>);
};

export default Name;
