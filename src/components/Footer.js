import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

const Footer = () => {
	return ( 
		<footer>
			<Navbar className="justify-content-center" fixed="bottom">
				<Link to='/about'>About</Link>
			</Navbar>
		</footer>
	);
}
 
export default Footer;