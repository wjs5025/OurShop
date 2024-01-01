import React from 'react';
import './style.css';
import { ICartProduct } from 'types/cart';
import getLocalePrice from 'utils/getLocalePrice';
import getDiscountPrice from 'utils/getDiscountPrice';
import CartAmountInput from '../CartAmountInput/CartAmountInput';

interface ICartProductListItemProps {
	cartProduct: ICartProduct;
}
function CartProductListItem(props: ICartProductListItemProps) {
	const { cartProduct } = props;
	const finalPrice = getDiscountPrice(cartProduct.product.price, cartProduct.product.discountRate);

	return (
		<div className="cart-product-list-item-container">
			{/* 상품 정보 */}
			<div className="column product-info">
				<img className="photo" src={cartProduct.product.photoUrl} alt="" />
				<span>{cartProduct.product.name}</span>
			</div>
			{/* 가격 정보 */}
			<div className="column price">
				<span className="final-price">
					<b>{getLocalePrice(finalPrice)}</b>원
				</span>
				{cartProduct.product.discountRate !== 0 && (
					<span className="original-price">
						<s>{getLocalePrice(cartProduct.product.price)}원</s>
					</span>
				)}
			</div>
			{/* 수량 정보 */}
			<div className="column">
				<CartAmountInput cartProduct={cartProduct} />
			</div>
			{/* 총액  */}
			<div className="column">
				<b>{getLocalePrice(cartProduct.amount * finalPrice)}</b>원
			</div>
		</div>
	);
}

export default CartProductListItem;
