import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
// import Employees from './pages/employees/employees.component';
import Employee from './pages/employees/employees.component';
import AppLibrary from './pages/app-library/app-library.component';
import ReportsPage from './pages/reports/reports.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/app-library' component={AppLibrary} />
          <Route exact path='/reports' component={ReportsPage} />
          <Route exact path='/employees' component={Employee} />
        </Switch> 
      </div>
    );
  }
}
export default App;
