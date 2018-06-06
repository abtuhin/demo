const INITIAL_STATE = {
	categories: [],
	searchItems: []
};

export const demoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_DATA_RESOLVED":
			return {
				...state,
				categories: action.payload
			};
		case "SEARCH_ITEM_RESOLVED":
			return {
				...state,
				searchItems: action.payload
			};

		default:
			return state;
	}
};
