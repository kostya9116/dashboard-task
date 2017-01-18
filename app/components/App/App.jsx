import React, {Component} from 'react';
import MenuComponent from "../Menu/Menu";
import ChartsComponent from "../Charts/Charts";
import {Grid} from 'semantic-ui-react';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Grid className="dashboardContainer">
				<MenuComponent/>
				<ChartsComponent/>
			</Grid>
		);
	}
}
export default App;
