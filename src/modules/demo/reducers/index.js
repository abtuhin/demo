const INITIAL_STATE = {
	categories: []
};

export const demoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_DATA_RESOLVED":
			
			return {
				...state,
				categories: action.payload
				// root: action.payload.filter(item => item.ParentCategoryId == 0),
				// parent: action.payload.filter(item => item.ParentCategoryId == 0 && item.)
			};

		default:
			return state;
	}
};
