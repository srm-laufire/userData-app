import { React } from 'react';

const actionNames = {
	name: 'setName',
	age: 'setAge',
};
// eslint-disable-next-line react/display-name
const genInput = (type) => ({ state, actions }) =>
	<input
		role={ type }
		value={ state[type] }
		onChange={ (evt) =>
			actions[actionNames[type]](evt.target.value) }
	/>;

export default genInput;
