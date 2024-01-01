import { getProduct } from 'api/product';
import { useQuery } from 'react-query';

const useProduct = () => {
	const { data, refetch } = useQuery('get-product', getProduct, {
		staleTime: 60000,
	});

	return { data, refetch };
};

export default useProduct;
