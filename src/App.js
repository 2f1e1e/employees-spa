import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Employees</h2>
            <ul>
              <li><Link to="/new" activeClassName="active">New user</Link></li>
              <li><Link to="/" activeClassName="active">Users</Link></li>
            </ul>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />
