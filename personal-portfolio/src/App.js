import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Projects />
		</div>
	)
}

export default App
