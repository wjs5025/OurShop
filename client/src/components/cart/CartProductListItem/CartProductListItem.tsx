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
			<div className="column product-info">
				<img className="photo" src={cartProduct.product.photoUrl} alt="" />
				<span>{cartProduct.product.name}</span>
			</div>
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
			<div className="column">
				<CartAmountInput cartProduct={cartProduct} />
			</div>
			<div className="column">
				<b>{getLocalePrice(cartProduct.amount * finalPrice)}</b>원
			</div>
		</div>
	);
}

export default CartProductListItem;
