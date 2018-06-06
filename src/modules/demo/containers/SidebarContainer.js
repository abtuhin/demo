import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import SidebarComponent from "../components/SidebarComponent";

class SidebarContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getCategories();
	}

	render() {
		return <SidebarComponent categories={this.props.categories} />;
	}
}

const mapStateToProps = store => {
	return {
		categories: store.demo.categories
	};
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
