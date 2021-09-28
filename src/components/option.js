import { React } from 'react';

const Option = (gender) =>
	<option key={ gender } role="option" value={ gender }>{ gender }</option>;

export default Option;
