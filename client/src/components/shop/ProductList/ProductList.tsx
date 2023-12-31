import React, { useEffect, useState } from 'react';

import './style.css';
import axios from 'axios';
import { IProduct } from 'types/product';
import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
	const [products, setProducts] = useState([]);

	const getData = async () => {
		const res = await axios.get('api/products');
		if (res.status === 200) {
			console.log(res);
			setProducts(res.data);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="product-list">
			{products.length && products.map((el: IProduct, idx) => <ProductCard key={el.id} idx={idx + 1} product={el} />)}
		</section>
	);
}

export default ProductList;
