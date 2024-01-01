import http from './http';

export const getCartApi = async () => {
	const response = await http.get('/cart');
	return response;
};

export const addProductToCartApi = async (productId: number) => {
	const response = await http.post('/cart', { productId });
	return response;
};

export const removeProductFromCartApi = async (productId: number) => {
	const response = await http.delete(`/cart/${productId}`);
	return response;
};
