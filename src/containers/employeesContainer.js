import { connect } from 'react-redux';
import * as action from '../actions';
import Employees from '../components/Employees';

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

const getVisibleEmployees = (roleFilter, isArchiveFilter, employees) => {
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: state => {
      dispatch(action.addEmployee(state))
    },
    onRoleChange: role => {
      dispatch(action.setRoleFilter(role));
    }
  }
}

const employeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)

export default employeesContainer
