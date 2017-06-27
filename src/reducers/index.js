import employees from '../employees';
//import update from 'react-addons-update';

const initialState = {
  employees,
  roleFilter: "all",
  isArchiveFilter: false,
  sortBy: "none"
};

export default function userstate(state = initialState, action) {
  console.log(action);
  switch (action.type) {

    case 'GET_ALL_EMPLOYEES':
      return { ...state, employees }

    case 'ADD_EMPLOYEE':
      return {...state, employees: [...state.employees, {
      name: action.state.name,
      phone: action.state.phone,
      birthday: action.state.birthday,
      role: action.state.role,
      isArchive: action.state.isArchive,
      id: action.state.lastId
    }]}

    case 'EDIT_EMPLOYEE':
      const editedEmployee = [...state.employees].map(item => {
        if (+item.id === +action.state.id) {
          item.name = action.state.name;
          item.phone= action.state.phone;
          item.birthday= action.state.birthday;
          item.role = action.state.role;
          item.isArchive =  action.state.isArchive;
          item.id = action.state.id;
        }
        return item;
      });

      return {...state, employees: editedEmployee}

    case 'SET_ROLE_FILTER':
      return {...state, roleFilter: action.filter}

    case 'SET_ARCHIVE_FILTER':
      return {...state, isArchiveFilter: action.filter}

    case 'SET_SORTING':
      return {...state, sortBy: action.sortBy}

    default:
      return state;
  }
}
