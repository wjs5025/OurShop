const getDiscountPrice = (price: number, discountRate: number) => {
	// 할인 원가
	const originDiscountPrice = Math.trunc((price / 100) * (100 - discountRate));

	// 100원 단위 절사 할인 금액
	const truncatedPrice = Math.floor(originDiscountPrice / 100) * 100;

	return truncatedPrice;
};

export default getDiscountPrice;
