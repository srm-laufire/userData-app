import { React } from 'react';
import '../App.scss';
import RemoveButton from './removeButton';

const User = (user) => {
	const { id, name, age, gender } = user;

	return <div key={ id } role="user">
		<span role="name" className="name">{ name }</span>
		<span role="age" className="age">{ age }</span>
		<span role="gender" className="gender">{ gender }</span>
		<span>{ RemoveButton(user) }</span>
	</div>;
};

export default User;
