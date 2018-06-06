import data from "./categories.json";

export const getCategories = () => {
	return dispatch => {
		dispatch({ type: "GET_DATA_RESOLVED", payload: data });
	};
};
