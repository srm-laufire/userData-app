import { React } from 'react';
import Options from './options';
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
			{ genderOptions.map(Options) }
		</select>);
};

export default Gender;
