import { React } from 'react';

const Option = (gender) =>
	<option key={ gender } role="option" value={ gender }>{ gender }</option>;

const Gender = (context) => {
	const { state: { gender }} = context;
	const { config: { genderOptions }} = context;

	return (
		<select
			value={ gender }
			role="gender"
			onChange={ (evt) => context.actions.setGender(evt.target.value) }
		>
			{ genderOptions.map(Option) }
		</select>);
};

export default Gender;
