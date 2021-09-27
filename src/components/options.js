import { React } from 'react';

const Options = (gender) =>
	<option key={ gender } role="option" value={ gender }>{ gender }</option>;

export default Options;
