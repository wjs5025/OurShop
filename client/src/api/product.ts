/* eslint-disable import/prefer-default-export */
import http from './http';

export const getProduct = async () => {
	const response = await http.get('/products');
	return response;
};
