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
	users: UserManager.add(context),
});

// TODO: Rename this to setUsers.
const updateUsers = ({ data }) => ({
	users: data,
});

const resetInput = () => ({
	name: '',
	age: '',
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
