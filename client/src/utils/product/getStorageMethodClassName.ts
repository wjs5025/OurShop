const getStorageMethodClassName = (storage_method: string) => {
	switch (storage_method) {
		case '냉장':
			return 'cold';
		case '냉동':
			return 'frozen';
		default:
			return 'standard';
	}
};

export default getStorageMethodClassName;
