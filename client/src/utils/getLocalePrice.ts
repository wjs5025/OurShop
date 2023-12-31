/**
 * 금액을 인자로 넣으면, 원 단위로 변환된 금액 문자열 반환
 * @param price 금액
 * @returns
 */
const getLocalePrice = (price: number) => {
	return price.toLocaleString('ko-KR');
};

export default getLocalePrice;
