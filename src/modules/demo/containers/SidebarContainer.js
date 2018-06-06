import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import SidebarComponent from "../components/SidebarComponent";

class SidebarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ""
		};
	}

	componentDidMount() {
		this.props.getCategories();
	}

	onSearchChange = e => {
		this.setState(
			{
				searchText: e.target.value
			},
			() => {
				this.props.searchItem(this.state.searchText);
			}
		);
	};

	render() {
		return (
			<div>
				<form className="search-form">
					<input
						type="search"
						onChange={this.onSearchChange}
						name="search"
						ref={input => (this.query = input)}
						placeholder="Search..."
					/>
				</form>
				<SidebarComponent
					categories={this.props.categories}
					searchItems={this.props.searchItems}
					searchText={this.state.searchText}
				/>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		categories: store.demo.categories,
		searchItems: store.demo.searchItems
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
