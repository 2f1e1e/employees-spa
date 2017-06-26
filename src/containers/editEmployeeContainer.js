import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';

import Employee from '../components/Employee';

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

const mapStateToProps = (state, ownProps, props) => {
  console.log("own")
  console.log(props);
  if (ownProps.match.path === '/new') {
    console.log("new entry")
  }
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onTodoClick: state => {
      if (props.match.path === '/new') {
        dispatch(action.addEmployee(state));
        console.log("new entry")
      } else {
        dispatch(action.editEmployee(state));
      }
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
