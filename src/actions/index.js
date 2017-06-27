export const newEntry = (state) => ({
  type: 'GET_ALL_EMPLOYEES',
  state
})

export const addEmployee = (state) => ({
  type: 'ADD_EMPLOYEE',
  state
})

export const editEmployee = (state) => ({
  type: 'EDIT_EMPLOYEE',
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

export const setRoleFilter = (filter) => ({
  type: 'SET_ROLE_FILTER',
  filter
})

export const setIsArchiveFilter = (filter) => ({
  type: 'SET_ARCHIVE_FILTER',
  filter
})

export const setSorting = (sortBy) => ({
  type: 'SET_SORTING',
  sortBy
})
