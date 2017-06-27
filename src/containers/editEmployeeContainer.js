import { connect } from 'react-redux';
import * as action from '../actions';
import Employee from '../components/Employee';

const mapStateToProps = (state, ownProps, props) => {
  console.log("own")
  console.log(props);

  let employee = state.employees.filter(a => {
    return +a.id === +ownProps.match.params.id;
  })[0];
  let lastId = Math.max.apply(null,state.employees.map(a => {return a.id})) + 1;

  if (ownProps.match.path === '/new') {
    console.log("new entry")
    return {
      newEntry: ownProps.match.path === '/new' ? true : false,
      lastId: lastId,
  };
  } else {
    return {
      employees: state.employees,
      user: employee,
      lastId: lastId,
      newEntry: ownProps.match.path === '/new' ? true : false
    }
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
    }
  }
}

const editEmployeeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee)

export default editEmployeeContainer
