import { React } from 'react';
import Option from './option';
import config from '../core/config';

const Gender = (context) => {
	const { state: { gender }} = context;
	const { genderOptions } = config;

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
