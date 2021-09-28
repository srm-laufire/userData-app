import { React } from 'react';

const actionNames = {
	name: 'setName',
	age: 'setAge',
};
// eslint-disable-next-line react/display-name
const genInput = (type) => (context) => {
	const { state } = context;

	return (
		<input
			role={ type }
			value={ state[type] }
			onChange={ (evt) =>
				context.actions[actionNames[type]](evt.target.value) }
		/>);
};

export default genInput;
