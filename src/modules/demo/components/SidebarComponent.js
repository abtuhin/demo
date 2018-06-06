import React, { Component } from "react";

export default class SidebarComponent extends Component {
	render() {
		let { searchText } = this.props;
		let query = searchText.charAt(0).toUpperCase() + searchText.slice(1);
		return (
			<ul>
				{this.props.categories.filter(item => !item.ContainsProducts).map((val, index) => {
					return (
						<div key={index}>
							<li style={{ background: query.length && val.Name.includes(query) ? "yellow" : "#fff" }}>{val.Name}</li>
							<ul>
								{this.props.categories.filter(sub => sub.ParentCategoryId == val.Id).map((subVal, i) => {
									return (
										<div key={i}>
											<li style={{ background: query.length && subVal.Name.includes(query) ? "yellow" : "#fff" }}>
												{subVal.Name}
											</li>
											<ul>
												{this.props.categories
													.filter(
														nest => nest.ParentCategoryId == subVal.Id && nest.DisplayOrder == subVal.DisplayOrder
													)
													.map((nestSub, j) => {
														return (
															<li
																style={{ background: query.length && nestSub.Name.includes(query) ? "yellow" : "#fff" }}
															>
																{nestSub.Name}
															</li>
														);
													})}
											</ul>
										</div>
									);
								})}
							</ul>
						</div>
					);
				})}
			</ul>
		);
	}
}
