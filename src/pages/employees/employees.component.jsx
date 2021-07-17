import React, { Component } from 'react';
import { EmployeeCardList } from './employee-card-list/employee.card-list.component';
import { EmployeeCardGrid }  from './employee-card-grid/employee.card-grid.component';
import { SearchBox }  from '../../components/search-box/search-box.component';
import Modal from '../../components/modal/modal.component';
import EmployeeAddForm from '../../pages/employees/employee-add/employee-add-form.component'
// import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';
import './employees.styles.scss'

class Employee extends Component {
    constructor() {
        super();
        
        this.state = {employees: [],  searchField: '', layout: 'card-view', show: false };

        this.handleGridLayout = this.handleGridLayout.bind(this);
        this.handleListLayout = this.handleListLayout.bind(this);
        this.showAddUserModal = this.showAddUserModal.bind(this);
        this.hideAddUserModal = this.hideAddUserModal.bind(this);
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ employees: users }));
    }
    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    showAddUserModal = () => {
        this.setState({show: true});
    };

    hideAddUserModal = () => {
        this.setState({show: false});
    };

    handleGridLayout() {
        this.setState({layout: 'card-view'});
    };

    handleListLayout() {
        this.setState({layout: 'list-view'});
    };

    render() {
        const { employees, searchField } = this.state;
        const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchField.toLowerCase()));
        
    //   list view of employees
    if(this.state.layout === 'list-view') {
    return (
        <div className='employee-container' >
        <div className="container-header" >
            <h1>Company Rolodex</h1>
            <div className="container-subheader" >
                <div className="button-selection-list">
                    <button onClick={this.handleListLayout}><i class="fa fa-bars"></i> List</button>
                    <div className='button-spacer' />
                    <button onClick={this.handleGridLayout}><i class="fa fa-th-large"></i> Grid</button>
                    {/* <ToggleSwitch toggleName='List' /> */}
                </div>
                <div className="employee-search" >
                    <SearchBox onSearchChange={this.onSearchChange} />
                    <div className='search-spacer' />
                    {/* add user */}
                    <button type = "button" onClick={this.showAddUserModal}><i class="fa fa-plus"></i> Employee</button>
                </div>
            </div>
        </div>
        <div className="employee-list-view">
            <EmployeeCardList employees={filteredEmployees} />
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <EmployeeAddForm/>
            </Modal>
        </div>
        </div>
    );
    } 
    //   card view of employees
    else {
        return (
            <div className='employee-container' >
            <div className="container-header" >
                <h1>Company Rolodex</h1>
                <div className="container-subheader" >
                    <div className="button-selection">
                        <button onClick={this.handleListLayout}><i className="fa fa-bars"></i> List</button>
                        <div className="button-spacer" />
                        <button onClick={this.handleGridLayout}><i className="fa fa-th-large"></i> Grid</button>
                        {/* <ToggleSwitch toggleName='List' /> */}
                    </div>
                    <div className="employee-search" >
                        <SearchBox onSearchChange={this.onSearchChange} />
                        <div className='search-spacer' />
                        <button type = "button" onClick={this.showAddUserModal}><i class="fa fa-plus"></i> Employee</button>
                    </div>
                </div>
            </div>
            <div className="employee-table-view">
                <EmployeeCardGrid employees={filteredEmployees} />
                < Modal show={this.state.show} handleClose={this.hideModal} closeText="X">
                    <EmployeeAddForm/>
                </Modal>
            </div>
            </div>
        );
    }
}
}

export default Employee;
