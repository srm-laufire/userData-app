import { React } from 'react';
import './App.scss';
import Name from './components/name';
import context from './core/context';

const App = () => <div className="App" role="App">
	Name { Name(context) }
</div>;

export default App;
