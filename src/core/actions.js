const setName = ({ data }) => ({
	name: data,
});

const setAge = ({ data }) => ({
	age: data,
});

const actions = {
	setName,
	setAge,
};

export default actions;
