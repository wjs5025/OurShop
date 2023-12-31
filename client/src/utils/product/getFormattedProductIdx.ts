const getFormattedProductIdx = (idx: number): string => (idx < 10 ? `0${idx}` : `${idx}`);
export default getFormattedProductIdx;
