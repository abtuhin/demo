import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import SidebarContainer from "./modules/demo/containers/SidebarContainer";
import AppContainer from "./AppContainer";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SidebarContainer />
			</Provider>
		);
	}
}

export default App;
