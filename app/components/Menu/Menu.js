import React, {Component} from 'react'
import {Grid, Menu, Header, Label} from 'semantic-ui-react'
import './menu.css';

class MenuComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeItem: 'salesReport'
		};
		this.handleItemClick = this.handleItemClick.bind(this);

	}

	handleItemClick = (e, {name}) => this.setState({activeItem: name});

	render() {
		const activeItem = this.state.activeItem;
		return (
			<Grid.Column className="dashboardMenuContainer" width={4}>
				<Header className="headerLine" as='h3' block/>
				<Menu className="dashboardMenuItemsContainer" fluid vertical tabular>
					<Menu.Header className="dashboardHeaderText">Dashboard</Menu.Header>
					<Menu.Item
						className="menuItem menuFirstItem"
						name='salesReport'
						active={activeItem === 'salesReport'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						className="menuItem"
						name='retentionReport'
						active={activeItem === 'retentionReport'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						className="menuItem"
						name='alerts'
						active={activeItem === 'alerts'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						className="menuItem"
						name='settings'
						active={activeItem === 'settings'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						className="menuItem"
						name='userAccounts'
						active={activeItem === 'userAccounts'}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</Grid.Column>
		);
	}
}

export default MenuComponent;
