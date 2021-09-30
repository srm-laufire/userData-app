import { React, useEffect } from 'react';
import './App.scss';
import Gender from './components/gender';
import context from './core/context';
import AddButton from './components/addButton';
import Users from './components/users';
import Remote from './services/remote';
import genInput from './components/genInput';

const App = () => {
	// TODO: Forgot to reset?
	useEffect(Remote.fetchUsers, []);

	return <div className="App" role="App">
		Name { genInput('name')(context) }
		Age { genInput('age')(context) }
		Gender { Gender(context) }
		{ AddButton(context) }
		{ Users(context) }
	</div>;
};

export default App;
