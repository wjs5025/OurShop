import React from 'react';
import './style.css';
import { IProduct } from 'types/product';
import getDiscountPrice from 'utils/getDiscountPrice';
import getLocalePrice from 'utils/getLocalePrice';
import getStorageMethodClassName from 'utils/product/getStorageMethodClassName';
import getFormattedProductIdx from 'utils/product/getFormattedProductIdx';

interface IProductCardProps {
	idx: number;
	product: IProduct;
}

function ProductCard(props: IProductCardProps) {
	const { idx, product } = props;

	return (
		<div className="product-card-container">
			<span className="idx">{getFormattedProductIdx(idx)}</span>
			<img className="photo" src={product.photoUrl} alt="product img" />
			<p className="name">{product.name}</p>
			<p className="description">{product.description}</p>
			<div className="price">
				<span className="final-price">
					<b>{getLocalePrice(getDiscountPrice(product.price, product.discountRate))}</b>원
				</span>
				<span className="original-price">
					<s>{getLocalePrice(product.price)}원</s>
				</span>
				<span className="discount-rate">{product.discountRate}%</span>
			</div>
			<p className={`storage-method ${getStorageMethodClassName(product.storageMethod)}`}>{product.storageMethod}</p>
		</div>
	);
}

export default ProductCard;
