import { Link, Outlet } from 'react-router-dom'

const Products = () => {
	return (
		<>
			<div>
				<input type="search" placeholder="Search Products" />
			</div>
			<nav className="primary-nav">
				<Link to="featured">Features</Link>
				<Link to="new">New</Link>
			</nav>
			<Outlet />
		</>
	)
}

export default Products
