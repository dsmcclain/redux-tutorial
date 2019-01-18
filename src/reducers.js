import { 
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

import React, { Component} from "react";
import {hot} from "react-hot-loader"; 

//use ES6 object destructuring to declare SHOW_ALL
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
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

function todoApp(state = {}, action) {
	return {
		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
		todos: todos(state.todos, action)
	}
}

export default todoApp;