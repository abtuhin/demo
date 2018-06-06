import data from "./categories.json";

export const getCategories = () => {
	return dispatch => {
		dispatch({ type: "GET_DATA_RESOLVED", payload: data });
	};
};

export const searchItem = text => {
	const query = text.charAt(0).toUpperCase() + text.slice(1);
	return dispatch => {
		dispatch({
			type: "SEARCH_ITEM_RESOLVED",
			payload: data.filter(item => {
				if (item.Name.includes(query)) return true;
				return false;
			})
		});
	};
};
