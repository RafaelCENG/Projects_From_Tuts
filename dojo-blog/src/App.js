import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetails from './components/BlogDetails'
import Create from './components/Create'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/create" element={<Create />}></Route>
						<Route path="/blogs/:id" element={<BlogDetails />} />
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
