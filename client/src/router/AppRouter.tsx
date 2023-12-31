import React from 'react';
import NavBar from 'components/common/NavBar/NavBar';
import ShopPage from 'pages/ShopPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from 'pages/CartPage';

function AppRouter() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ShopPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
