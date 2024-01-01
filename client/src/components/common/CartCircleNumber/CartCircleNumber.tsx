import React from 'react';
import './style.css';
import useCart from 'hooks/useCart';

function CartCircleNumber() {
	const { productCnt } = useCart();
	return <span className="circle-number">{productCnt}</span>;
}

export default CartCircleNumber;
