import React, {Component} from 'react'
import {Header, Button, Checkbox, Icon, Table, List, Dropdown, Menu} from 'semantic-ui-react'
import './crmSalesReport.css';

class CRMSalesReport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '1'
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick = (e, {name}) => this.setState({activeItem: name})

	render() {
		const options = [
			{text: 'One', value: 1},
			{text: 'Two', value: 2},
			{text: 'Three', value: 3},
		];
		const {activeItem} = this.state
		return (
			<div>
				<Header className="chartContainerHeaderText" as='h1'>CRM Sales Report</Header>
				<List className="headerListContainer" horizontal>
					<List.Item className="headerListItem" as='a'>All</List.Item>
					<List.Item className="headerListItem" as='a'>RAD</List.Item>
					<List.Item className="headerListItem" as='a'>SPAR</List.Item>
					<List.Item className="headerListItem" as='a'>Quality</List.Item>
					<List.Item className="headerListItem" as='a'>ODB</List.Item>
					<List.Item className="headerListItem" as='a'>EG</List.Item>
					<List.Item className="headerListItem" as='a'>CCA</List.Item>
					<List.Item className="headerListItem" as='a'>KRAV</List.Item>
					<List.Item className="headerListItem" as='a'>Back9</List.Item>
					<List.Item className="headerListItem" as='a'>LaVida</List.Item>
					<List.Item className="headerListItem" as='a'>Super</List.Item>
					<List.Item className="headerListItem" as='a'>LevelUp</List.Item>
					<List.Item className="headerListLastItem" as='a'>ADB</List.Item>
				</List>
				<Button className="addNewButton" primary>Add New</Button>
				<div className="secondRowContainer">
					<Dropdown
						className="dropDownList"
						selection
						options={options}
						placeholder='Bulk Actions'
					/>
					<Icon className="dropDownListIcon" name="check square"/>
					<Dropdown
						className="dropDownList"
						options={[]}
						search
						selection
						placeholder='Filter By...'
						noResultsMessage='Try another search.'
					/>
					<Icon className="dropDownListIcon" name="check square"/>


					<Menu className="paginationContainer" pagination>
						<Menu.Item className="paginationIcon paginationItem" name='doubleLeft'
								   active={activeItem === 'doubleLeft'}><Icon name="angle double left"/></Menu.Item>
						<Menu.Item className="paginationIcon paginationItem" name='left' active={activeItem === 'left'}><Icon
							name="angle left"/></Menu.Item>
						<Menu.Item className="paginationNumber paginationItem" name='1' active={activeItem === '1'}/>
						<Menu.Item className="paginationItem disabledPaginationItem" disabled>Of 1</Menu.Item>
						<Menu.Item className="paginationIcon paginationItem" name='doubleRight'
								   active={activeItem === 'doubleRight'}><Icon name="angle double right"/></Menu.Item>
						<Menu.Item className="paginationIcon paginationItem" name='right'
								   active={activeItem === 'right'}><Icon name="angle right"/></Menu.Item>

					</Menu>
				</div>

				<Table className="tableContainer"  compact selectable>
					<Table.Header fullWidth>
						<Table.Row>
							<Table.HeaderCell>
								<Checkbox />
							</Table.HeaderCell>
							<Table.HeaderCell>LimeLight CRM</Table.HeaderCell>
							<Table.HeaderCell>Step 1 Sales</Table.HeaderCell>
							<Table.HeaderCell>Goal Step 1</Table.HeaderCell>
							<Table.HeaderCell>Goal Completion %</Table.HeaderCell>
							<Table.HeaderCell>GStep 2 Sales</Table.HeaderCell>
							<Table.HeaderCell>Tablet Sales</Table.HeaderCell>
							<Table.HeaderCell>Tablet Sales %</Table.HeaderCell>
							<Table.HeaderCell>Prepaid %</Table.HeaderCell>
							<Table.HeaderCell>Take Rate</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body className="tableBody">
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | RAD </Table.Cell>
							<Table.Cell> 1750 </Table.Cell>
							<Table.Cell> 2150 </Table.Cell>
							<Table.Cell> 81.40% </Table.Cell>
							<Table.Cell> 1487 </Table.Cell>
							<Table.Cell> 145 </Table.Cell>
							<Table.Cell> 8.89% </Table.Cell>
							<Table.Cell> 8.43% </Table.Cell>
							<Table.Cell> 93.25%</Table.Cell>

						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>

						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Checkbox />
							</Table.Cell>
							<Table.Cell> > | </Table.Cell>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
							<Table.Cell/>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default CRMSalesReport;
