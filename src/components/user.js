import { React } from 'react';
import '../App.scss';
import RemoveButton from './removeButton';

const User = (context) => {
	const { data } = context;
	const { id, name, age, gender } = data;

	return <div key={ id } role="user">
		<span role="name" className="name">{ name }</span>
		<span role="age" className="age">{ age }</span>
		<span role="gender" className="gender">{ gender }</span>
		<span>{ RemoveButton(context) }</span>
	</div>;
};

export default User;
