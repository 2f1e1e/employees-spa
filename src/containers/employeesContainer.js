import { connect } from 'react-redux';
//import { addEmployee } from '../actions';
import * as action from '../actions';


import Employees from '../components/Employees';

/*const getVisibleEmployees = (employees, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return employees
    case 'SHOW_COMPLETED':
      return employees.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return employees.filter(t => !t.completed)
  }
}*/
const dateToISO = (date) => {
  return `${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}`;
}
const getSortedEmployees = (employees, sortBy) => {

    if (sortBy === "none") {
      return employees;
    } else {
     return employees.sort((a, b) => {
        if (sortBy === 'birthday') {
          return Date.parse(dateToISO(a.birthday)) - Date.parse(dateToISO(b.birthday));
        }
        if (sortBy === 'name') {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        }
        });
    }

}
function getVisibleEmployees(roleFilter, isArchiveFilter, employees) {
  return employees
    .filter(m => {
      return (
        (roleFilter === 'all' || roleFilter === m.role) &&
        (isArchiveFilter === false || isArchiveFilter === m.isArchive)
      );
    })
}

const mapStateToProps = state => {
  const { roleFilter, isArchiveFilter, sortBy, employees } = state;
  return {
    employees: getSortedEmployees(getVisibleEmployees(roleFilter, isArchiveFilter, employees), sortBy)
    //todos: getVisibleEmployees(state.employees, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: state => {
      dispatch(action.addEmployee(state))
    },
    onRoleChange: role => {
      dispatch(action.setRoleFilter(role));
      console.log("onRoleChange")
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)

export default VisibleTodoList
