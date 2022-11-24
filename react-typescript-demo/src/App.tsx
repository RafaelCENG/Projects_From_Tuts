import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

function App() {
	const personName = {
		first: 'Bruce',
		last: 'Wayne',
	}

	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne',
		},
		{
			first: 'Bruce2',
			last: 'Wayne2',
		},
		{
			first: 'Bruce3',
			last: 'Wayne3',
		},
	]
	return (
		<div className="App">
			<Greet name="Strike" isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status="loading" />
			<Heading>Placeholder text</Heading>
			<Oscar>
				<Heading>Oscar goes to Leonardo Dicaprio!</Heading>
			</Oscar>
		</div>
	)
}

export default App
