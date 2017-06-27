import { connect } from 'react-redux';
import * as action from '../actions';
import Pane from '../components/Pane';

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: state => {
      dispatch(action.addEmployee(state))
    },
    onRoleChange: role => {
      dispatch(action.setRoleFilter(role));
      console.log("onRoleChange")
    },
    onIsArchiveChange: isArchive => {
      dispatch(action.setIsArchiveFilter(isArchive));
      console.log("onIsArchiveChange")
    },
    onSortingChange: filter => {
      dispatch(action.setSorting(filter));
    }
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const paneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane)

export default paneContainer
