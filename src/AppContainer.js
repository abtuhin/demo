import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "./store";
import * as actions from "./modules/demo/actions";
import SidebarContainer from "./modules/demo/containers/SidebarContainer";

class AppContainer extends Component {
	render() {
		return (
			<Provider store={store}>
				<SidebarContainer />
			</Provider>
		);
	}
}

const mapStateToProps = store => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			...actions
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
