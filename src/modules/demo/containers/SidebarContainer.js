import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import SidebarComponent from "../components/SidebarComponent";

class SidebarContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <SidebarComponent />;
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
