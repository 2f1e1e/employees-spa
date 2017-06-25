import employees from '../employees';
//import update from 'react-addons-update';

const initialState = {employees};

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
