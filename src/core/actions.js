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

const addUser = ({ state, data }) => ({
	users: UserManager.add(state, data),
});

const updateUsers = ({ data }) => ({
	users: data,
});

const resetInput = () => ({
	name: '',
	age: '',
	gender: '',
});

const removeUser = (context) => ({
	users: UserManager.remove(context),
});

const actions = {
	setName,
	setAge,
	setGender,
	addUser,
	updateUsers,
	resetInput,
	removeUser,
};

export default actions;
