import { IProduct } from './product';

export interface ICart {
	cartProducts: ICartProduct[];
}

export interface ICartProduct {
	productId: number;
	amount: number;
	product: IProduct;
}
