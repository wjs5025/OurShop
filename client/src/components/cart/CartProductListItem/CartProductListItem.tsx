import React from 'react';
import './style.css';
import { ICartProduct } from 'types/cart';
import getLocalePrice from 'utils/getLocalePrice';
import getDiscountPrice from 'utils/getDiscountPrice';

interface ICartProductListItemProps {
	cartProduct: ICartProduct;
}
function CartProductListItem(props: ICartProductListItemProps) {
	const { cartProduct } = props;
	const finalPrice = getDiscountPrice(cartProduct.product.price, cartProduct.product.discountRate);

	return (
		<tr>
			<td>{cartProduct.product.name}</td>
			<td>
				<span className="final-price">
					<b>{getLocalePrice(finalPrice)}</b>원
				</span>
				<span className="original-price">
					<s>{getLocalePrice(cartProduct.product.price)}원</s>
				</span>
			</td>
			<td>{cartProduct.amount}</td>
			<td>{getLocalePrice(cartProduct.amount * finalPrice)}</td>
		</tr>
	);
}

export default CartProductListItem;
