import { React, useEffect } from 'react';
import './App.scss';
import context from './core/context';
import Remote from './services/remote';
import genInput from './components/genInput';
import Gender from './components/gender';
import AddButton from './components/addButton';
import Users from './components/users';

const App = () => {
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
