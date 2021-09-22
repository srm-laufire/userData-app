import { React } from 'react';
import './App.scss';
import Name from './components/name';
import Age from './components/age';
import Gender from './components/gender';
import context from './core/context';
import AddButton from './components/addButton';
import Users from './components/users';

const App = () => <div className="App" role="App">
	Name { Name(context) } Age { Age(context) } Gender { Gender(context) }
	{ AddButton(context) }
	{ Users(context) }
</div>;

export default App;
