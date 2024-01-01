/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import './style.css';
import { IProduct } from 'types/product';
import useProduct from 'hooks/useProduct';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
	const { data } = useProduct();
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		if (data?.status === 200) {
			setProducts(data.data);
		}
	}, [data]);

	return (
		<section className="product-list">
			{products.length && products.map((el: IProduct, idx) => <ProductCard key={idx} idx={idx + 1} product={el} />)}
		</section>
	);
}

export default ProductList;
