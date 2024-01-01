import React from 'react';
import CartProductList from 'components/cart/CartProductList/CartProductList';
import PageLayout from 'components/common/PageLayout/PageLayout';
import SectionHeader from 'components/common/SectionHeader/SectionHeader';
import CartTotal from 'components/cart/CartTotal/CartTotal';

function CartPage() {
	return (
		<>
			<PageLayout>
				<SectionHeader text="장바구니" />
				<CartProductList />
			</PageLayout>
			<CartTotal />
		</>
	);
}

export default CartPage;
