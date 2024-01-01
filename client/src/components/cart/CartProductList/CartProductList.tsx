import React, { useEffect, useState } from 'react';
import './style.css';
import { ICartProduct } from 'types/cart';
import useCart from 'hooks/useCart';
import CartProductListItem from '../CartProductListItem/CartProductListItem';

function CartProductList() {
	const { data, productCnt } = useCart();
	const [cart, setCart] = useState([]);

	useEffect(() => {
		if (data && data.status === 200) {
			setCart(data.data);
		}
	}, [data]);

	return (
		<div className="cart-product-list">
			{cart.length ? (
				<>
					<div className="list-header">
						<div>상품명</div>
						<div>구매가</div>
						<div>수량</div>
						<div>금액</div>
					</div>
					{cart.map((el: ICartProduct) => (
						<CartProductListItem key={el.productId} cartProduct={el} />
					))}
					<div className="product-cnt">총 {productCnt}개의 상품</div>
				</>
			) : (
				<div>장바구니에 상품이 없습니다</div>
			)}
		</div>
	);
}

export default CartProductList;
