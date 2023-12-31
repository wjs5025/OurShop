import CartProductList from 'components/cart/CartProductList/CartProductList';
import PageLayout from 'components/common/PageLayout/PageLayout';
import SectionHeader from 'components/common/SectionHeader/SectionHeader';
import React from 'react';

function CartPage() {
	return (
		<PageLayout>
			<SectionHeader text="장바구니" />
			<CartProductList />
		</PageLayout>
	);
}

export default CartPage;
