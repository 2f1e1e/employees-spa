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
      return { ...state, employees: action.payload }

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
      let obj = Object.assign([], state.employees)
      /*obj.map(item => {
        if (+item.id === +action.state.id) {
          item.name = action.state.name,
          phone: action.state.phone,
          birthday: action.state.birthday,
          role: action.state.role,
          isArchive: action.state.isArchive,
          id: action.state.id
        }
      });*/
      let employee = state.employees.filter(a => {
        return +a.id === +action.state.id;
      })[0];
      employee.name = action.state.name;
      employee.phone= action.state.phone;
      employee.birthday= action.state.birthday;
      employee.role = action.state.role;
      employee.isArchive =  action.state.isArchive;
      employee.id = action.state.id;

      console.log("user")
      console.log(employee)
      let obj2 = Object.assign(obj, employee)
      console.log("obj2")
      console.log(obj2)
      return {...state, employees: obj2}

    case 'SET_ROLE_FILTER':
      return {...state, roleFilter: action.filter}

    case 'SET_ARCHIVE_FILTER':
      return {...state, isArchiveFilter: action.filter}

    case 'SET_SORTING':
      return {...state, sortBy: action.sortBy}

    case 'SORT_EMPLOYEE':

    let emp2 = [];
    Object.assign(emp2, state.employees);
    console.log("")
    console.log(emp2.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    }))

    return {...state, employees: emp2}
    /*
    let emp = update(employees, {$set:
        state.employees.sort((a, b) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        })});
    */
    /*  return  { ...state,
        employees: state.employees.sort((a, b) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        })}
    */
    default:
      return state;
  }
}
