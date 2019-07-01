import {
  TODO_ADD,
  TODO_TOGGLE,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/constant';

import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: return action.filterType; break;
    default: return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case TODO_ADD: return [
        ...state, {
        text: action.text,
        completed: false
      }
    ];break;
    case TODO_TOGGLE: return state.map((item, index) => {
      if(index === action.index){
        return Object.assign({}, item, {
          completed: !item.completed
        })
      }
      return item;
    });break;
    default: return state;
  }
}

export default combineReducers({
  visibilityFilter,
  todos
})