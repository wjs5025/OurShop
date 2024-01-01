import { getCartApi } from 'api/cart';
import { useQuery } from 'react-query';
import { ICartProduct } from 'types/cart';
import getDiscountPrice from 'utils/getDiscountPrice';

const useCart = () => {
	const { data, refetch } = useQuery('get-cart', getCartApi, {
		staleTime: 60000,
	});

	/* 총 금액 */
	const totalPrice = data?.data.reduce(
		(acc: number, cur: ICartProduct) =>
			acc + cur.amount * getDiscountPrice(cur.product.price, cur.product.discountRate),
		0,
	);

	/* 장바구니 상품 개수 */
	const productCnt = data?.data.length;

	return { data, totalPrice, refetch, productCnt };
};

export default useCart;
