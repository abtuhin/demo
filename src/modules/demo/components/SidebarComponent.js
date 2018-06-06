import React, { Component } from "react";

export default class SidebarComponent extends Component {
	// _renderRoor = () => {
	// 	this.props.categories.filter(item )  map(item=> {
	//
	// 	})
	// }
	render() {
		console.log(this.props.categories);

		return (
			<ul>
				{this.props.categories.filter(item => !item.ContainsProducts).map((val, index) => {
					return (
						<div key={index}>
							<li>{val.Name}</li>
							<ul>
								{this.props.categories.filter(sub => sub.ParentCategoryId == val.Id).map((subVal, i) => {
									return (
										<div key={i}>
											<li>{subVal.Name}</li>
											<ul>
												{this.props.categories
													.filter(
														nest => nest.ParentCategoryId == subVal.Id && nest.DisplayOrder == subVal.DisplayOrder
													)
													.map((nestSub, j) => {
														return <li>{nestSub.Name}</li>;
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
