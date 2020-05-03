import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
	return ( 
		<header>
			<nav>
				<Link to='/'>DecideRoo</Link>
				<NavLink to="/six-hats">Six Hats</NavLink>
				<NavLink to="/jump-to">Jump To</NavLink>
				<NavLink to="/mathsy">Lengthy Mathsy</NavLink>
			</nav>
		</header>
	);
}
 
export default Header;