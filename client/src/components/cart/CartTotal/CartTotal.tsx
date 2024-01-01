import React from 'react';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Equal } from 'assets/icons/equal.svg';
import './style.css';
import useCart from 'hooks/useCart';
import getLocalePrice from 'utils/getLocalePrice';

function CartTotal() {
	const { productCnt, totalPrice } = useCart();

	const payment = () => {
		alert(`${getLocalePrice(totalPrice)}원 결제를 요청합니다.`);
	};

	if (productCnt)
		return (
			<div className="cart-total-container">
				<div className="inner">
					<div>
						<span>총 금액</span>
						<span className="price">{getLocalePrice(totalPrice)}원</span>
					</div>
					<Plus />
					<div>
						<span>배송비</span>
						<span className="price">{totalPrice >= 30000 ? '무료' : `3000원`}</span>
						<span className="gray">(3만원이상 구매 시 무료배송)</span>
					</div>
					<Equal />
					<div>
						<span>결제 금액</span>
						<span className="price">{getLocalePrice(totalPrice >= 30000 ? totalPrice : totalPrice + 3000)}원</span>
					</div>
				</div>
				<button type="button" className="payment" onClick={payment}>
					결제하기
				</button>
			</div>
		);
	return <div />;
}

export default CartTotal;
