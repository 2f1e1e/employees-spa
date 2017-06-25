export const addEmployee = (state) => ({
  type: 'ADD_EMPLOYEE',
  state
})

export const tableSortColumn = (sort) => ({
  type: 'SORT_EMPLOYEE',
  sort
})
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
