import React, { Component } from "react";

export default class SidebarComponent extends Component {
	_checkParent = ID => {
		if (this.props.parent) {
			if (this.props.parent.Id == ID) return true;
			else return false;
		}
	};
	render() {
		let { searchText } = this.props;
		let query = searchText.charAt(0).toUpperCase() + searchText.slice(1);
		return (
			<div style={{ display: "flex", justifyContent: "row", maxWidth: "100%", flex: 1 }}>
				<ul>
					{this.props.categories.filter(item => !item.ContainsProducts).map((val, index) => {
						return (
							<div key={index}>
								<li style={{ background: query.length && val.Name.includes(query) ? "yellow" : "#fff" }}>{val.Name}</li>
								<ul>
									{this.props.categories.filter(sub => sub.ParentCategoryId == val.Id).map((subVal, i) => {
										return (
											<div key={i}>
												<li
													style={{
														background:
															query.length && subVal.Name.includes(query) && this._checkParent(val.Id)
																? "yellow"
																: "#fff"
													}}
												>
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
																	style={{
																		background: query.length && nestSub.Name.includes(query) ? "yellow" : "#fff"
																	}}
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

				{this.props.searchItems.map(val => {
					return (
						<div>
							<h4>{val.Name}</h4>
							<img src={val.Picture.ImageUrl} />
						</div>
					);
				})}
			</div>
		);
	}
}
