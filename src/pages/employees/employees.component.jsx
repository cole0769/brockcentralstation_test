import React, { Component } from 'react';
import { EmployeeCardList } from './employee.card-list.component';
import { SearchBox }  from '../../components/search-box/search-box.component';

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
        employee.name.toLowerCase().includes(searchField.toLowerCase())
      );
  
      return (
        <div className='Employee'>
          <h1>Company Rolodex</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <EmployeeCardList employees={filteredEmployees} />
        </div>
      );
    }
  }
  
  export default Employee;