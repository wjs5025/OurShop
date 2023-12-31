import React from 'react';
import './style.css';
import Logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar-container">
			<div className="navbar-inner">
				<img className="logo" src={Logo} alt="" />
				<ul>
					<li>
						<NavLink to="/">상품</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							장바구니
							<span className="circle-number">99</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
