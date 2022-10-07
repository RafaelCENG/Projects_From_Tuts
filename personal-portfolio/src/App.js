import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Banner } from './components/Banner.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
		</div>
	)
}

export default App
