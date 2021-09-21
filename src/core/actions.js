const setName = ({ data }) => ({
	name: data,
});

const setAge = ({ data }) => ({
	age: data,
});

const setGender = ({ data }) => ({
	gender: data,
});

const actions = {
	setName,
	setAge,
	setGender,
};

export default actions;
