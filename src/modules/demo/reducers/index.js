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
			let categories = state.categories;
			let parent = action.payload.map(item => {
				return categories.filter(val => val.Id == item.ParentCategoryId);
			});
			// console.log(paren);
			return {
				...state,
				searchItems: action.payload,
				parent: parent
			};

		default:
			return state;
	}
};
