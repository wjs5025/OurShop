import PageLayout from 'components/common/PageLayout/PageLayout';
import SectionHeader from 'components/common/SectionHeader/SectionHeader';
import ProductList from 'components/shop/ProductList/ProductList';
import React from 'react';

function ShopPage() {
	return (
		<PageLayout>
			<SectionHeader text="타임세일" more moreUrl="https://mall.ourhome.co.kr" />
			<ProductList />
		</PageLayout>
	);
}

export default ShopPage;
