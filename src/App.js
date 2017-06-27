import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Employees</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
