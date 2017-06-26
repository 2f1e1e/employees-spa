import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';

import Employee from '../components/Employee';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}
const defaultRole = [
  {
    value: 'waiter',
    text: 'Официант'},
  {
    value: 'driver',
    text: 'Водитель'
  },
  {
    value: 'cook',
    text: 'Повар'
  }
];

/*function mapStateToProps (store) {
  return {
    employees: store.employees
  }
}*/

const mapStateToProps = (state, ownProps) => {
  console.log("state")
  console.log(ownProps);
  let employee = state.employees.filter(a => {
    return +a.id === +ownProps.match.params.id;
  })[0];
  let lastId = Math.max.apply(null,state.employees.map(a => {return a.id})) + 1;
  return {
    employees: state.employees,
    user: employee,
    role: defaultRole,
    lastId: lastId
    //selectedRole: employee.role,
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: state => {
      dispatch(action.addEmployee(state))
      console.log("dsf")
      console.log(state)
    }
  }
}

const editEmployeeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee)

export default editEmployeeContainer
