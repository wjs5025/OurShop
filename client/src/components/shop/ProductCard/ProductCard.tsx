import React from 'react';
import './style.css';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import { IProduct } from 'types/product';
import getDiscountPrice from 'utils/getDiscountPrice';
import getLocalePrice from 'utils/getLocalePrice';
import getStorageMethodClassName from 'utils/product/getStorageMethodClassName';
import getFormattedProductIdx from 'utils/product/getFormattedProductIdx';
import { addProductToCartApi } from 'api/cart';
import useCart from 'hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface IProductCardProps {
	idx: number;
	product: IProduct;
}

function ProductCard(props: IProductCardProps) {
	const { refetch } = useCart();
	const navigate = useNavigate();
	const { idx, product } = props;

	const add = async () => {
		const response = await addProductToCartApi(product.productId);
		if (response.status === 200) {
			refetch();
			if (window.confirm('장바구니에 상품이 추가되었습니다! 장바구니로 이동하시겠어요?')) {
				navigate('/cart');
			}
		}
	};

	return (
		<div role="presentation" className="product-card-container" onClick={add}>
			<div className="overlay">
				<Cart />
				<span>장바구니에 추가</span>
			</div>
			<span className="idx">{getFormattedProductIdx(idx)}</span>
			<img className="photo" src={product.photoUrl} alt="product img" />
			<p className="name">{product.name}</p>
			<p className="description">{product.description}</p>
			<div className="price">
				<span className="final-price">
					<b>{getLocalePrice(getDiscountPrice(product.price, product.discountRate))}</b>원
				</span>
				{product.discountRate !== 0 && (
					<>
						<span className="original-price">
							<s>{getLocalePrice(product.price)}원</s>
						</span>
						<span className="discount-rate">{product.discountRate}%</span>
					</>
				)}
			</div>
			<p className={`storage-method ${getStorageMethodClassName(product.storageMethod)}`}>{product.storageMethod}</p>
		</div>
	);
}

export default ProductCard;
