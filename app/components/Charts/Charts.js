import React, {Component} from 'react'
import CRMSalesReport from '../CRMSalesReport/CRMSalesReport'
import AffiliateSalesReport from '../AffiliateSalesReport/AffiliateSalesReport'
import {Grid} from 'semantic-ui-react'
import './charts.css';

class ChartsComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid.Column className="chartsContainer" stretched width={12}>
				<Grid.Row  className="chartContainer" >
					<CRMSalesReport/>
				</Grid.Row>
				<Grid.Row  className="chartContainer" >
					<AffiliateSalesReport/>
				</Grid.Row>
				<Grid.Row>
				</Grid.Row>
			</Grid.Column>
		);
	}
}

export default ChartsComponent;
