import React, { Component } from 'react';
import { EmployeeCardList } from './employee-card-list/employee.card-list.component';
import { EmployeeCardGrid }  from './employee-card-grid/employee.card-grid.component';
import { SearchBox }  from '../../components/search-box/search-box.component';
// import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';
import './employees.styles.scss'

  class Employee extends Component {
    constructor() {
      super();
  
      this.state = {
        employees: [],
        searchField: ''
      };
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ employees: users }));
    }
  
    onSearchChange = event => {
      this.setState({ searchField: event.target.value });
    };
  
    render() {
      const { employees, searchField } = this.state;
        const filteredEmployees = employees.filter(employee =>
          employee.name.toLowerCase().includes(searchField.toLowerCase()
          )
      );
  
      return (
        <div className='employee-container' >
          <div className="container-header" >
            <h1>Company Rolodex</h1>
              <div className="container-subheader" >
                  <div class="button-selection">
                    <button onclick="listView()"><i class="fa fa-bars"></i> List</button>
                    <span> </span>
                    <button onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
                    {/* <ToggleSwitch toggleName='List' /> */}
                  </div>
                  <div className="employee-search" >
                    <SearchBox onSearchChange={this.onSearchChange} />
                  </div>
              </div>
          </div>
          <div className="employee-table-view">
            <EmployeeCardList employees={filteredEmployees} />
          </div>
        </div>
      );
    }
  }
  
  export default Employee;