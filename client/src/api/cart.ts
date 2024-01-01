import http from './http';

/* 장바구니 조회 */
export const getCartApi = async () => {
	const response = await http.get('/cart');
	return response;
};

/* 장바구니에 상품 추가/증량 */
export const addProductToCartApi = async (productId: number) => {
	const response = await http.post('/cart', { productId });
	return response;
};

/* 장바구니에 상품 삭제/감량 */
export const removeProductFromCartApi = async (productId: number) => {
	const response = await http.delete(`/cart/${productId}`);
	return response;
};
