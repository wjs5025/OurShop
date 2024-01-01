import React from 'react';
import './style.css';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import { ICartProduct } from 'types/cart';
import { addProductToCartApi, removeProductFromCartApi } from 'api/cart';
import useCart from 'hooks/useCart';

interface ICartAmountInputProps {
	cartProduct: ICartProduct;
}
function CartAmountInput(props: ICartAmountInputProps) {
	const { cartProduct } = props;
	const { refetch } = useCart();

	const add = async () => {
		if (cartProduct.amount === 99) {
			alert('상품은 최대 99개까지만 추가할 수 있습니다.');
		}
		const response = await addProductToCartApi(cartProduct.productId);
		if (response.status === 200) {
			refetch();
		}
	};

	const remove = async () => {
		if (cartProduct.amount === 1) {
			if (!window.confirm('장바구니에서 상품을 제거하시겠어요?')) return;
		}
		const response = await removeProductFromCartApi(cartProduct.productId);
		if (response.status === 200) {
			refetch();
		}
	};

	return (
		<div className="cart-amount-input-container">
			<button type="button" onClick={remove}>
				<Minus />
			</button>
			<span>{cartProduct.amount}</span>
			<button type="button" onClick={add}>
				<Plus />
			</button>
		</div>
	);
}

export default CartAmountInput;
