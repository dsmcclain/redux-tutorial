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

import { 
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

import { combineReducers } from 'redux'

//use ES6 object destructuring to declare SHOW_ALL
const { SHOW_ALL } = VisibilityFilters

// set initial state
const initialState = {
	visibilityFilter: VisibilityFilter.SHOW_ALL,
	todos: []
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return {
						...todo,
						completed: !todo.completed //not sure
					} 
				}
			return todo
			})
		default:
			return state
	}			
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default hot(module)(todoApp);