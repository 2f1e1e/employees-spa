import React, { Component } from 'react';
import Table from './Table';
import Pane from '../containers/paneContainer';

const headers = [
  "Имя", "Дата рождения", "Должность", "Телефон"
];

class Employees extends Component {
  render() {
    return (
      <div className="App">
      <Pane />
      <Table headers = {headers} data = {this.props.employees} />
        {this.props.children}
      </div>
    );
  }
}

export default Employees;
