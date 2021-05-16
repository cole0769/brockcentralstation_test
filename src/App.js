import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Employees from './pages/employees/employees.component';
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
          <Route exact path='/employees' component={Employees} />
        </Switch> 
      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={brock_logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
