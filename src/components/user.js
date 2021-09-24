import { React } from 'react';
import '../App.scss';
import RemoveButton from './removeButton';

const User = (user) => {
	const { id, name, age, gender } = user;

	return <div key={ id } role="user">
		<span role="name" className="user-style">{ name }</span>
		<span role="age" className="user-style">{ age }</span>
		<span role="gender" className="user-style">{ gender }</span>
		<span>{ RemoveButton(user) }</span>
	</div>;
};

export default User;
