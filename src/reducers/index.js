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
      //let obj = Object.assign([], state.employees)
      /*let obj = [...state.employees]
      console.log("state.employees")
      console.log(state)
      console.log("obj")
      console.log(...obj)*/
      console.log(action.state)
      let res = [...state.employees].map(item => {
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
      /*
      let employee = state.employees.filter(a => {
        return +a.id === +action.state.id;
      })[0];

      employee.name = action.state.name;
      employee.phone= action.state.phone;
      employee.birthday= action.state.birthday;
      employee.role = action.state.role;
      employee.isArchive =  action.state.isArchive;
      employee.id = action.state.id;
*/
  /*    let employee2 = {
        name: action.state.name,
        phone: action.state.phone,
        birthday: action.state.birthday,
        role: action.state.role,
        isArchive: action.state.isArchive,
        id: action.state.id
      }
      console.log("e1")
      console.log(res)

      let obj2 = Object.assign([...state.employees], employee)
      console.log("e2")
      console.log(employee2)*/
      /*return {
        ...state,
        employees: Object.assign([...state.employees], employee)
      }*/
      return {...state, employees: res}


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
