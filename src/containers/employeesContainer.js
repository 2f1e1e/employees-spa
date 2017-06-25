import { connect } from 'react-redux';
import { addEmployee } from '../actions';


import Employees from '../components/Employees';

const getVisibleEmployees = (employees, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return employees
    case 'SHOW_COMPLETED':
      return employees.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return employees.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees
    //todos: getVisibleEmployees(state.employees, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: state => {
      dispatch(addEmployee(state))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)

export default VisibleTodoList
