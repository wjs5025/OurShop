import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { ICartProduct } from 'types/cart';
import CartProductListItem from '../CartProductListItem/CartProductListItem';

function CartProductList() {
	const [cart, setCart] = useState([]);

	const getData = async () => {
		const res = await axios.get('api/cart');
		if (res.status === 200) {
			console.log(res);
			setCart(res.data);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<table className="cart-product-table">
			<tr className="table-header">
				<th>상품명</th>
				<th>구매가</th>
				<th>수량</th>
				<th>금액</th>
			</tr>
			{cart.length && cart.map((el: ICartProduct) => <CartProductListItem key={el.productId} cartProduct={el} />)}
		</table>
	);
}

export default CartProductList;
