import React from 'react';
import './style.css';
import Logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';
import CartCircleNumber from '../CartCircleNumber/CartCircleNumber';

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
							<CartCircleNumber />
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
