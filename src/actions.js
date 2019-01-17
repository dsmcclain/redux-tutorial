// action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
	SHOW_COMPLETED: 'SHOW_COMPLETED'
}

// action creators

function addTodo(text) {
	return { type: ADD_TODO, text }
}

function toggleTodo(index) {
	return { type: TOGGLE_TODO, index }
}

function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter }
}

dispatch(addTodo(text))
dispatch(toggleTodo(index))
dispatch(setVisibilityFilter(filter))