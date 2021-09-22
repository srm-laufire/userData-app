import UserManager from '../services/userManager';

const setName = ({ data }) => ({
	name: data,
});

const setAge = ({ data }) => ({
	age: Number(data),
});

const setGender = ({ data }) => ({
	gender: data,
});

const addUser = (context) => ({
	name: '',
	age: '',
	gender: '',
	users: UserManager.add(context),
});

const actions = {
	setName,
	setAge,
	setGender,
	addUser,
};

export default actions;
