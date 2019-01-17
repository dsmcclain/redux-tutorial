//Store

{
	visibilityFilter: 'SHOW_ALL',
	todos: [
		{
			text: 'Think about Redux',
			completed: true
		},
		{
			text: 'Keep state in a single tree',
			completed: false
		}
	]
}

//reducers

import { VisibilityFilters } from './actions'

// set initial state
const initialState = {
	visibilityFilter: VisibilityFilter.SHOW_ALL,
	todos: []
}

function todoApp(state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return {
				...state,
				visibilityFilter: action.filter
			}
		default:
			return state
}

