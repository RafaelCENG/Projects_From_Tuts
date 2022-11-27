import './App.css'
import Private from './components/auth/Private'
import Profile from './components/auth/Profile'
import Button from './components/Button'
import Container from './components/Container'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import User from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
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
			{/* <Greet name="Strike" isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Status status="loading" />
			<Heading>Placeholder text</Heading>
			<Oscar>
				<Heading>Oscar goes to Leonardo Dicaprio!</Heading>
			</Oscar>
			<Button
				handleClick={(event, id) => {
					console.log('Button Clicked', event, id)
				}}
			/>
			<Input value="" handleChange={(event) => console.log(event)} />
			<Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider> */}
			{/* <UserContextProvider>
				<User />
			</UserContextProvider> */}
			{/* <Private isLoggedIn={true} component={Profile} /> */}
		</div>
	)
}

export default App
